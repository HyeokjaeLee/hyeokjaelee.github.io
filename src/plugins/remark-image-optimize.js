// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { visit } from 'unist-util-visit';

// Cache LQIP data URLs by absolute file path so repeat images aren't reprocessed.
const lqipCache = new Map();

/**
 * @param {string} absPath
 * @returns {Promise<string>}
 */
async function getLqip(absPath) {
  const cached = lqipCache.get(absPath);
  if (cached) return cached;
  const buffer = await sharp(absPath)
    .resize(16)
    .blur(2)
    .webp({ quality: 30 })
    .toBuffer();
  const dataUrl = `data:image/webp;base64,${buffer.toString('base64')}`;
  lqipCache.set(absPath, dataUrl);
  return dataUrl;
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isRelativeLocal(url) {
  return Boolean(url) && !url.startsWith('/') && !URL.canParse(url);
}

/**
 * Read (creating if needed) the hProperties bag consumed by remark-rehype.
 * hProperties survives Astro's image transform — getHTMLAttributes spreads
 * all non-excluded props into the final <img>, and getImage's nullish-assignment
 * for loading/fetchpriority lets explicit values win over the lazy defaults.
 *
 * @param {import('mdast').Image} node
 * @returns {Record<string, unknown>}
 */
function hProperties(node) {
  if (!node.data) node.data = {};
  const data =
    /** @type {import('mdast').ImageData & { hProperties?: Record<string, unknown> }} */ (
      node.data
    );
  if (!data.hProperties) data.hProperties = {};
  return data.hProperties;
}

/**
 * Eager-loads the first body image (likely LCP) and attaches a build-time LQIP
 * blurred background to each local image.
 *
 * @type {import('unified').Plugin<[], import('mdast').Root>}
 */
export function remarkImageOptimize() {
  return async (tree, file) => {
    /** @type {{ node: import('mdast').Image; absPath: string }[]} */
    const lqipJobs = [];
    let firstImageHandled = false;

    visit(tree, 'image', (node) => {
      // First image is the likely LCP element — load eagerly.
      if (!firstImageHandled) {
        firstImageHandled = true;
        const props = hProperties(node);
        props.loading = 'eager';
        props.fetchpriority = 'high';
      }

      const url = node.url ?? '';
      if (isRelativeLocal(url) && typeof file.path === 'string') {
        const absPath = path.resolve(path.dirname(file.path), decodeURI(url));
        if (fs.existsSync(absPath)) {
          lqipJobs.push({ node, absPath });
        }
      }
    });

    await Promise.all(
      lqipJobs.map(async ({ node, absPath }) => {
        try {
          const dataUrl = await getLqip(absPath);
          const props = hProperties(node);
          const lqipStyle = `background-image:url(${dataUrl});background-size:cover;background-position:center;`;
          const existing = typeof props.style === 'string' ? props.style : '';
          props.style = existing ? `${existing} ${lqipStyle}` : lqipStyle;
          props['data-lqip'] = '1';
        } catch {
          // Skip this image's LQIP on sharp failure; skeleton CSS still covers it.
        }
      }),
    );
  };
}

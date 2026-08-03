import rehypeFigure from '@microflash/rehype-figure';
import { toHtml } from 'hast-util-to-html';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { rehypeGallery } from '../src/plugins/rehype-gallery';
import { remarkGallery } from '../src/plugins/remark-gallery';

// Mirrors the astro.config markdown pipeline (minus remarkImageOptimize, which
// needs real image files). Guards the rehypeFigure → rehypeGallery ordering and
// the gallery caption-preservation logic against silent regressions.
const pipeline = unified()
  .use(remarkParse)
  .use(remarkDirective)
  .use(remarkGallery)
  .use(remarkRehype)
  .use(rehypeFigure)
  .use(rehypeGallery);

function render(md: string): string {
  const hast = pipeline.runSync(pipeline.parse(md));
  return toHtml(hast).replace(/\s+/g, ' ').trim();
}

function assertContains(
  name: string,
  md: string,
  needles: string[],
  forbidden: string[] = [],
) {
  const html = render(md);
  for (const needle of needles) {
    if (!html.includes(needle)) {
      throw new Error(`${name}: expected "${needle}" in\n  ${html}`);
    }
  }
  for (const banned of forbidden) {
    if (html.includes(banned)) {
      throw new Error(`${name}: did not expect "${banned}" in\n  ${html}`);
    }
  }
  console.log(`✓ ${name}`);
}

let failed = 0;

try {
  assertContains(
    'standalone image → figure with figcaption from alt',
    '![a caption](img.png)\n',
    ['<figure>', '<figcaption>a caption</figcaption>', 'alt="a caption"'],
  );

  assertContains(
    'gallery without caption → bare img cells, no figcaption',
    ':::gallery\n![one](a.png)\n![two](b.png)\n:::\n',
    ['<figure class="gallery">', 'src="a.png"', 'src="b.png"'],
    ['<figcaption>'],
  );

  assertContains(
    'gallery with caption → imgs + shared figcaption',
    ':::gallery\n![one](a.png)\n![two](b.png)\n\nshared caption\n:::\n',
    [
      '<figure class="gallery">',
      'src="a.png"',
      'src="b.png"',
      '<figcaption>shared caption</figcaption>',
    ],
  );

  assertContains(
    'image with empty alt → left inline, not wrapped',
    '![](img.png)\n',
    ['<img src="img.png" alt="">'],
    ['<figure'],
  );
} catch (error) {
  failed++;
  console.log(`✖ ${(error as Error).message}`);
}

process.exit(failed > 0 ? 1 : 0);

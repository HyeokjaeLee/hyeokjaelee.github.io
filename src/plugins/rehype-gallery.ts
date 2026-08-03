import { visit } from 'unist-util-visit';

interface HastNode {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

/**
 * Flatten gallery figures so every image is a direct grid cell. Collects all
 * descendant `<img>` elements, covering both newline-separated (one `<p>`) and
 * blank-line-separated (multiple `<p>`) image layouts.
 */
export function rehypeGallery() {
  return (tree: HastNode) => {
    visit(tree, (node: HastNode) => {
      if (node.type !== 'element' || node.tagName !== 'figure') return;
      const className = node.properties?.className;
      const isGallery = Array.isArray(className)
        ? className.includes('gallery')
        : className === 'gallery';
      if (!isGallery) return;
      const images: HastNode[] = [];
      visit(node, (child: HastNode) => {
        if (child.tagName === 'img') images.push(child);
      });
      // Preserve an optional shared caption: rehypeFigure wraps gallery images in
      // nested <figure> elements, so the caption survives as the only direct child
      // <p>/<figcaption> without an image. Galleries without one keep bare <img> cells.
      const caption = (node.children ?? []).find(
        (child) =>
          (child.tagName === 'p' || child.tagName === 'figcaption') &&
          !(child.children ?? []).some((c) => c.tagName === 'img'),
      );
      const children: HastNode[] = images;
      if (caption) {
        children.push({
          type: 'element',
          tagName: 'figcaption',
          properties: {},
          children: caption.children ?? [],
        });
      }
      node.children = children;
    });
  };
}

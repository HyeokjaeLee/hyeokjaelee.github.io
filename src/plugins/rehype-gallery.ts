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
      node.children = images;
    });
  };
}

import { visit } from 'unist-util-visit';

// Transformer param shape. Deliberately omits `data`: mdast's RootData lacks an
// index signature and would clash with the index bag below, breaking the
// Transformer<Root> assignability check. Directive nodes are cast inside.
interface MdastRoot {
  type: string;
  children: unknown[];
}

// Directive node shape: `type` is a plain string (directive names aren't in
// standard mdast, so a literal-union would trip strict's no-overlap check);
// `data` is an index-signature bag so hName/hProperties write freely.
interface DirectiveNode {
  type: string;
  name?: string;
  attributes?: Record<string, string | undefined>;
  data?: Record<string, unknown>;
}

/**
 * Preserve a `:::gallery{cols="N"}` container directive as
 * `<figure class="gallery" data-cols="N">`. Images stay real mdast `image`
 * nodes, so Astro's image optimization is untouched.
 */
export function remarkGallery() {
  return (tree: MdastRoot) => {
    visit(tree, (node) => {
      const directive = node as unknown as DirectiveNode;
      if (
        directive.type !== 'containerDirective' ||
        directive.name !== 'gallery'
      ) {
        return;
      }
      const cols = String(directive.attributes?.cols ?? '2');
      directive.data = directive.data ?? {};
      directive.data.hName = 'figure';
      directive.data.hProperties = {
        className: ['gallery'],
        'data-cols': cols,
      };
    });
  };
}

/**
 * Demo-first migration helper.
 *
 * Docusaurus converts raw HTML in Markdown into JSX, and during that step
 * `hast-util-to-estree` parses every inline `style="..."` attribute as CSS.
 * Many of the migrated MkDocs files contain malformed inline styles
 * (e.g. `align-items-flex-start` with a missing colon), and a single bad
 * declaration aborts compilation of the whole page.
 *
 * To keep the preview building across ~1470 files, this rehype plugin simply
 * drops every inline `style` attribute. Inline styling is lost, but content
 * and layout structure render fine — good enough for a demo preview.
 */
export default function rehypeStripStyle() {
  return (tree) => {
    const visit = (node) => {
      if (
        node &&
        node.type === 'element' &&
        node.properties &&
        Object.prototype.hasOwnProperty.call(node.properties, 'style')
      ) {
        delete node.properties.style;
      }
      if (node && Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };
    visit(tree);
  };
}

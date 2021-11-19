const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // 새로운 노드 생성 시 실행
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/markdown-layout.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        styles: path.resolve(__dirname, "src/assets/scss"),
        img: path.resolve(__dirname, "src/assets/img"),
        contexts: path.resolve(__dirname, "src/contexts"),
      },
    },
  });
};

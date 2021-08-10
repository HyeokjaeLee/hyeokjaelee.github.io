module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/templates/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `./contents`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};

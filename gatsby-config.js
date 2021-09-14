module.exports = {
  siteMetadata: {
    title: `Nagle's Blog`,
    siteUrl: `https://hyeokjaelee.github.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-emoji`, `gatsby-remark-highlight-code`],
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://hyeokjaelee.github.io",
        sitemap: "https://hyeokjaelee.github.io/sitemap-index.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/.svg$, // See below to configure properly
        },
      },
    },
  ],
};

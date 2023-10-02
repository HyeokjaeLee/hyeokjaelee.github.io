import path from 'path';

import type { GatsbyConfig } from 'gatsby';

export const ALIAS = ['stores', 'components', 'layouts', 'hooks'].reduce(
  (alias, aliasName) => {
    alias[`@${aliasName}`] = path.resolve(__dirname, `src/${aliasName}`);
    return alias;
  },
  {
    types: 'types',
  },
);

const POST_ARTICLE_STYLES = {
  heading: 'font-bold mt-10 mb-4',
  'heading[depth=1]': 'text-4xl',
  'heading[depth=2]': 'text-3xl',
  'heading[depth=3]': 'text-2xl',
  'heading[depth=4]': 'text-xl',
  'heading[depth=5]': 'text-lg',
  'heading[depth=6]': 'text-base',
  paragraph: 'my-4',
  link: 'text-blue-500',
  list: 'list-disc ml-8',
  listItem: 'list-item',
  blockquote: 'border-l-4 border-gray-500 pl-4 italic',
  table: 'table-auto',
  tableCell: 'border px-4 py-2',
  tableRow: 'border px-4 py-2',
  image: 'max-w-full rounded-sm my-12 mx-auto',
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `덕업일치 개발자`,
    author: {
      name: `Hyoekjae Lee`,
      summary: 'Front-end Engineer',
    },

    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      github: 'HyeokjaeLee',
      linkedin: 'hyeokjae-lee-844042225',
      email: 'leehyeokjae97@gamil.com',
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(`./src/layouts/GlobalLayout.tsx`),
      },
    },
    `gatsby-plugin-pnpm`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: ALIAS,
        extensions: ['tsx', 'ts', 'js', 'jsx'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              loading: 'lazy',
              linkImagesToOriginal: true,
              disableBgImageOnAlpha: true,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: POST_ARTICLE_STYLES,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ 'content:encoded': node.html }],
              })),
            // TODO: 설정 필요
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: '/rss.xml',
            title: 'Gatsby Starter Blog RSS Feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;

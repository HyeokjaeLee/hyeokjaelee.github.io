import path from 'path';

import type { GatsbyConfig } from 'gatsby';

export const ALIAS = [
  'stores',
  'components',
  'layouts',
  'hooks',
  'utils',
  'constants',
].reduce(
  (alias, aliasName) => {
    alias[`@${aliasName}`] = path.resolve(__dirname, `src/${aliasName}`);
    return alias;
  },
  {
    types: 'types',
  },
);

enum META_DATA {
  TITLE = '덕업일치 개발자',
  DESCRIPTION = '덕업일치 개발자의 블로그입니다.',
  SITE_URL = 'https://hyeokjaelee.github.io/',
  AUTHOR_NAME = 'HyoekjaeLee',
  AUTHOR_SUMMARY = 'Front-end Engineer',
  GIT_HUB = 'HyeokjaeLee',
  LINKED_IN = 'hyeokjae-lee-844042225',
  EMAIL = 'leehyeokjae97@gamil.com',
}

const POST_ARTICLE_STYLES = {
  heading: 'font-bold mt-10 mb-4',
  'heading[depth=1]': 'text-4xl',
  'heading[depth=2]': 'text-3xl',
  'heading[depth=3]': 'text-2xl',
  'heading[depth=4]': 'text-xl',
  'heading[depth=5]': 'text-lg',
  'heading[depth=6]': 'text-base',
  link: 'text-blue-500 hover:underline',
  list: 'list-disc ml-5',
  listItem: 'list-item list-container',
  paragraph: 'my-4 whitespace-pre-wrap',
  blockquote: 'border-l-4 border-gray-500 pl-4 italic blockquote-container',
  table: 'table-auto my-4',
  tableCell:
    'border border-zinc-700 dark:border-zinc-400 px-4 py-2 whitespace-pre-wrap',
  tableRow: 'border border-zinc-700 dark:border-zinc-400 px-4 py-2 text-xs',
  image: 'max-w-full rounded-sm my-12 mx-auto',
  strong: 'font-black',
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: META_DATA.TITLE,
    author: {
      name: META_DATA.AUTHOR_NAME,
      summary: META_DATA.AUTHOR_SUMMARY,
    },

    description: META_DATA.DESCRIPTION,
    siteUrl: META_DATA.SITE_URL,
    social: {
      github: META_DATA.GIT_HUB,
      linkedin: META_DATA.LINKED_IN,
      email: META_DATA.EMAIL,
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-typescript',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-postcss',
    'gatsby-plugin-pnpm',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/404'],
        output: '/sitemap',
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(`./src/layouts/GlobalLayout/index.tsx`),
      },
    },

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
        name: META_DATA.TITLE,
        short_name: META_DATA.TITLE,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/robot-turtle.png`,
      },
    },
  ],
};

export default config;

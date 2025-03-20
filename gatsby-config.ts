import type { GatsbyConfig } from 'gatsby';
import path from 'path';

import { classMap } from './src/styles/post-tags';

export const ALIAS = [
  'stores',
  'components',
  'layouts',
  'hooks',
  'utils',
  'constants',
  'images',
  'generated',
  'shared',
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
        component: path.resolve(
          __dirname,
          '/src/layouts/GlobalLayout/index.tsx',
        ),
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
        path: `${__dirname}/src/contents`,
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
          'gatsby-remark-gifs',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap,
            },
          },
          {
            resolve: `gatsby-remark-figure-caption`,
            options: {
              figureClassName: 'w-full my-6',
              captionClassName:
                'text-center text-sm text-zinc-400 dark:text-zinc-500 mt-1 not-italic',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 90,
              withWebp: true,
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
        icon: './favicon.png',
      },
    },
  ],
};

export default config;

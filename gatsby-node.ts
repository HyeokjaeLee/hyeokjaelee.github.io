import type { MarkdownRemark } from './types/graphql-types';
import type { GatsbyNode } from 'gatsby';

import { writeFileSync } from 'fs';
import path from 'path';

import { createFilePath } from 'gatsby-source-filesystem';

import { ALIAS } from './gatsby-config';

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors,
    );

    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: path.resolve(`./src/layouts/PostLayout/index.tsx`),
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};

const imageMap = new Map<
  string,
  {
    sizes: number[];
    src: string;
    slug: string;
  }
>();

export const onCreateNode: GatsbyNode<
  Pick<
    MarkdownRemark,
    | 'id'
    | 'children'
    | 'parent'
    | 'internal'
    | 'frontmatter'
    | 'fileAbsolutePath'
  >
>['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const { frontmatter, fileAbsolutePath } = node;

  if (
    !frontmatter ||
    node.internal.type !== 'MarkdownRemark' ||
    !fileAbsolutePath
  )
    return;

  const slug = createFilePath({ node, getNode });

  if (frontmatter.titleImage) {
    imageMap.set(slug, {
      //* 정적으로 생성할 이미지 사이즈
      sizes: [100, 200, 600],
      src: frontmatter.titleImage,
      slug,
    });
  }

  let generatedImageString = `
  import { StaticImage } from 'gatsby-plugin-image';
  
  interface TitleImageProps {
    slug: string;
    size: number;
    className?: string;
    imgClassName?: string;
  }
  
  export const TitleImage = (props: TitleImageProps) => {
    return {
  `;

  imageMap.forEach(({ sizes, slug, src }) => {
    const componentString = sizes.map(
      (size) => `${size}: (
        <StaticImage
          className={props.className}
          imgClassName={props.imgClassName}
          src="${src}"
          alt="${slug}"
          height={${size}}
        />
      )`,
    );

    generatedImageString += `"${slug}": {${componentString.join(',')}}[props.size],`;
  });

  generatedImageString += `}[props.slug]}`;

  writeFileSync(
    path.resolve(__dirname, 'src/generated/TitleImage.tsx'),
    generatedImageString,
  );

  createNodeField({
    name: 'slug',
    node,
    value: slug,
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    const { createTypes } = actions;

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      titleImage: String
      description: String
      date: Date @dateformat
      tags: [String]
    }

    type Fields {
      slug: String
    }
  `);
  };

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  getConfig,
  actions,
}) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: ALIAS,
    },
  });
};

export const onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: `babel-preset-gatsby`,
    options: {
      reactRuntime: 'automatic', // React 자동 import 설정
    },
  });
};

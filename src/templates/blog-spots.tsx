import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import HeaderGeneric from '../components/HeaderGeneric'
import { NavGeneric } from '../components/NavGeneric'
import '../assets/scss/pages/_blog-spots.scss'

interface Data {
  excerpt: string
  fields: { slug: string }
  frontmatter: { title: string; date: string }
}

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        date: string
        title: string
      }
      fields: {
        slug: string
      }
    }
    allMarkdownRemark: {
      nodes: Data[]
    }
  }
}

const BlogSpots = ({ data }: Props) => {
  const postInfo = data.markdownRemark
  const slug = postInfo.fields.slug.split(`/`).slice(1, -2).join(`/`)
  const postsDataList = data.allMarkdownRemark.nodes
  const PostsList: JSX.Element[] = postsDataList.map((postsData) => {
    const classification = postsData.fields.slug.split('/')[1]
    return (
      <li key={postsData.fields.slug}>
        <span>( {classification} ) </span>
        <a href={postsData.fields.slug}>
          <span className="title">{postsData.frontmatter.title}</span>
        </a>
        <span>{postsData.frontmatter.date}</span>
      </li>
    )
  })
  return (
    <Layout>
      <HeaderGeneric title={postInfo.frontmatter.title} slug={slug} />
      <div id="main">
        <NavGeneric />
        <span className="date">{postInfo.frontmatter.date}</span>
        <section id="content" className="main">
          <div dangerouslySetInnerHTML={{ __html: postInfo.html }} />
        </section>
        <hr />
        <div id="postsList">
          <ul>{PostsList}</ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
        }
      }
    }
  }
`

export default BlogSpots

import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import HeaderGeneric from '../components/HeaderGeneric'
import { NavGeneric } from '../components/NavGeneric'
import '../assets/scss/layout/_blog-spots.scss'
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
  }
}

const BlogSpots = ({ data }: Props) => {
  const postInfo = data.markdownRemark
  const slug = postInfo.fields.slug.split(`/`).slice(1, -2).join(`/`)
  console.log(postInfo.frontmatter.date)
  return (
    <Layout>
      <HeaderGeneric title={postInfo.frontmatter.title} slug={slug} />

      <div id="main">
        <NavGeneric />
        <span className="date">{postInfo.frontmatter.date}</span>
        <section id="content" className="main">
          <div id="text" dangerouslySetInnerHTML={{ __html: postInfo.html }} />
        </section>
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
  }
`

export default BlogSpots

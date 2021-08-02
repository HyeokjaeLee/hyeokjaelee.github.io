import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import HeaderGeneric from '../components/HeaderGeneric'
import { NavGeneric } from '../components/NavGeneric'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <HeaderGeneric title={post.frontmatter.title} subTitle="test" />
      <div id="main">
        <NavGeneric />
        <section id="content" className="main">
          <span className="image main"></span>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`

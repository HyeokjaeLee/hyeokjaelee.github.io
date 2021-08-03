import React from 'react'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import { NavGeneric } from '../components/NavGeneric'
import { graphql } from 'gatsby'
import '../assets/scss/pages/_posts.scss'
interface Data {
  excerpt: string
  fields: { slug: string }
  frontmatter: { title: string; date: string }
}
interface Props {
  data: {
    allMarkdownRemark: {
      nodes: Data[]
    }
  }
}

const Posts = ({ data }: Props) => {
  const postsDataList = data.allMarkdownRemark.nodes
  const PostsList: JSX.Element[] = postsDataList.map((postsData) => {
    const classification = postsData.fields.slug.split('/')[1]
    return (
      <li key={postsData.fields.slug}>
        <a href={postsData.fields.slug}>
          <ul>
            <li>{classification}</li>
            <li>{postsData.frontmatter.title}</li>
            <li>{postsData.frontmatter.date}</li>
          </ul>
        </a>
      </li>
    )
  })
  return (
    <Layout>
      <HeaderGeneric title="Posts" slug="" />
      <div id="main">
        <NavGeneric />
        <section id="content" className="main">
          <ul id="posts">{PostsList}</ul>
        </section>
      </div>
    </Layout>
  )
}

export default Posts

export const data = graphql`
  query {
    allMarkdownRemark {
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

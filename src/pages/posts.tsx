import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import { NavGeneric } from '../components/NavGeneric'
import { graphql } from 'gatsby'
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
  console.log(postsDataList)
  const test1 = '/Idea/test2/react/test/'
  const test2 = test1.split('/').slice(1, -1)
  console.log(test2)
  console.log(test2.splice(-1))
  console.log(test2)
  const Test: JSX.Element[] = postsDataList.map((postsData) => {
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
      <HeaderGeneric title="Posts" subTitle="" />
      <div id="main">
        <NavGeneric />
        <section id="content" className="main">
          <ul id="posts">{Test}</ul>
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

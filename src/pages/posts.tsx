import React, { useState } from 'react'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import { graphql } from 'gatsby'
import { Waypoint } from 'react-waypoint'
import Nav from '../components/Nav'
import '../assets/scss/pages/_posts.scss'
interface Nodes {
  excerpt: string
  fields: { slug: string }
  frontmatter: {
    title: string
    date: string
    description: string
    tag: string[]
  }
}
interface Group {
  tag: string
  totalCount: number
}
interface Props {
  data: {
    allMarkdownRemark: {
      group: Group[]
      nodes: Nodes[]
    }
  }
}

const Posts = ({ data }: Props) => {
  const [stickyNav, setStickyNav] = useState(false)
  console.log(data)
  const { group, nodes } = data.allMarkdownRemark
  const PostsList = nodes.map((node) => {
    return (
      <li key={node.fields.slug}>
        <a href={node.fields.slug}>
          <ul>
            <li>{'empty'}</li>
            <li>{node.frontmatter.title}</li>
            <li>{node.frontmatter.description}</li>
          </ul>
        </a>
      </li>
    )
  })
  return (
    <Layout>
      <HeaderGeneric title="Posts" slug="" />

      <Waypoint
        onEnter={() => {
          setStickyNav(false)
        }}
        onLeave={() => {
          setStickyNav(true)
        }}
      ></Waypoint>
      <Nav sticky={stickyNav} />
      <div id="main">
        <section id="content" className="main posts">
          <ul id="tags">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          <ul id="posts">{PostsList}</ul>
        </section>
      </div>
    </Layout>
  )
}

export default Posts

export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___tag) {
        tag: fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
          tag
        }
      }
    }
  }
`

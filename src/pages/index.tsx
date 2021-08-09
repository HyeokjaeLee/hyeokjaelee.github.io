import React, { useState } from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import { graphql, Link } from 'gatsby'
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
  const totalPostList = nodes.map((node) => {
    return (
      <li key={node.fields.slug}>
        <Link to={node.fields.slug}>
          <ul>
            <li>{node.frontmatter.date}</li>
            <li>{node.frontmatter.title}</li>
            <li>{node.frontmatter.description}</li>
            <li>
              {
                <ul className="tags">
                  {node.frontmatter.tag.map((tag) => {
                    return <li>{tag}</li>
                  })}
                </ul>
              }
            </li>
          </ul>
        </Link>
      </li>
    )
  })

  const [postList, setPostList] = useState(totalPostList)
  const [checkedTagList, setCheckedTagList] = useState<string[]>([])
  const filterPostList = (tag: string) => {
    if (checkedTagList.includes(tag)) {
      setCheckedTagList(
        checkedTagList.filter((checkedTag) => checkedTag !== tag)
      )
      console.log(checkedTagList)
    } else {
      checkedTagList.push(tag)
      setCheckedTagList(checkedTagList)
    }
  }
  const TagList = group.map((groupItem) => {
    return (
      <li key={groupItem.tag}>
        <a
          onClick={() => {
            filterPostList(groupItem.tag)
          }}
        >
          <span>{groupItem.tag}</span>
          <span>&nbsp;({groupItem.totalCount})</span>
        </a>
      </li>
    )
  })
  return (
    <Layout>
      <Header title="Hyeok-Jae" subTitle={"Nagle's programming & tech blog"} />

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
          <ul id="tags" className="tags">
            <li>
              <a>
                <span>Total</span>
                <span>&nbsp;({nodes.length})</span>
              </a>
            </li>
            {TagList}
          </ul>
          <ul id="posts">{postList}</ul>
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

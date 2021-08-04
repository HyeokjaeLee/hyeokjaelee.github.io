import { Link } from 'gatsby'
import React, { useState } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import logo from '../assets/images/logo.png'
import '../assets/scss/pages/_index.scss'

const Index = () => {
  return (
    <Layout>
      <Helmet title="Nagle" />
      <header id="header" className="alt">
        <span className="logo">
          <img src={logo} alt="" />
        </span>
        <h1>Hyeok - Jae</h1>
        <p>
          Nagle의 개발 블로그
          <br />
          Nagle's programming & tech blog
        </p>
      </header>
      <ul className="actions text-center">
        <li>
          <Link to="/posts" className="button">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/posts" className="button">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="button special">
            About
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Index

import { Link } from 'gatsby'
import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import mypic from '../assets/images/mypic.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

const About = () => {
  const [stickyNav, setStickyNav] = useState(false)
  return (
    <Layout>
      <Helmet title="Nagle" />

      <Header />

      <Waypoint
        onEnter={() => {
          setStickyNav(false)
        }}
        onLeave={() => {
          setStickyNav(true)
        }}
      ></Waypoint>
      <Nav sticky={stickyNav} aboutPage={true} />

      <div id="main">
        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>게으른 개발자, 이혁재입니다.</h2>
              </header>
              <p>
                <ul>
                  <li>안녕하세요! 주니어 개발자 이혁재입니다.</li>
                  <li>항상 '더 편한 방법이 없을까' 고민합니다.</li>
                  <li>새로운 IT 신기술에 관심이 많습니다.</li>
                  <li>Know-What, Know-Where을 중시합니다.</li>
                </ul>
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <span className="image">
              <img src={mypic} alt="" />
            </span>
          </div>
        </section>

        <section id="first" className="main special">
          <header className="major">
            <h2>Running</h2>
          </header>
          <ul className="statistics">
            <li className="style1">
              <span className="icon fa-code-fork"></span>
              <strong>5,120</strong> Git commit
            </li>
            <li className="style2">
              <span className="icon fa-copy"></span>
              <strong>8,192</strong> Posts
            </li>
            <li className="style4">
              <span className="icon fa-folder-open-o"></span>
              <strong>4,096</strong> Projects
            </li>
          </ul>
          <p className="content">
            Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu
            arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac
            arcu sit amet, fermentum pellentesque et purus. Integer maximus
            varius lorem, sed convallis diam accumsan sed. Etiam porttitor
            placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
            ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget
            purus nec nulla mattis et accumsan ut magna libero. Morbi auctor
            iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque.
            Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui
            curabitur lacinia.
          </p>
        </section>

        <section id="second" className="main special">
          <header className="major">
            <h2>Projects</h2>
            <p>
              Donec imperdiet consequat consequat. Suspendisse feugiat congue
              <br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.
            </p>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-clipboard"></span>
                <h3>Ipsum consequat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-github"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
          </header>
        </section>

        <section id="cta" className="main special">
          <header className="major">
            <h2>Posts</h2>
            <p>
              Donec imperdiet consequat consequat. Suspendisse feugiat congue
              <br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.
            </p>
          </header>
          <footer className="major">
            <ul className="actions">
              <li>
                <Link to="/posts" className="button">
                  View all Posts
                </Link>
              </li>
            </ul>
          </footer>
        </section>
      </div>
    </Layout>
  )
}

export default About

import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

interface Props {
  sticky: boolean
  aboutPage?: boolean
}
const Nav = (props: Props) => {
  const AboutPageNavItem = props.aboutPage ? (
    <>
      <li>
        <Scroll type="id" element="intro">
          <a href="#">Introduction</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first">
          <a href="#">Running</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">Projects</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="cta">
          <a href="#">Posts</a>
        </Scroll>
      </li>
    </>
  ) : (
    <></>
  )
  return (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
      <Scrollspy
        items={['intro', 'first', 'second', 'cta']}
        currentClassName="is-active"
        offset={-300}
      >
        <li>
          <Scroll type="id" element="intro">
            <a href="#">Introduction</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="first">
            <a href="#">Running</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="second">
            <a href="#">Projects</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="cta">
            <a href="#">Posts</a>
          </Scroll>
        </li>
        <li id="shortcut">
          <ul>
            <li>
              <a href="/">&nbsp; Home</a>
            </li>
            <li>
              <a href="/posts">&nbsp; Posts</a>
            </li>
            <li>
              <a href="/projects">&nbsp; Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </li>
      </Scrollspy>
    </nav>
  )
}

export default Nav

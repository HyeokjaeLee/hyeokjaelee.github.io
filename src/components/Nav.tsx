import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import '../assets/scss/components/_nav.scss'
import { Link } from 'gatsby'
interface Props {
  sticky: boolean
  aboutPage?: boolean
}
const Nav = (props: Props) => {
  const li_class = props.aboutPage ? '' : 'display-none'
  return (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
      <Scrollspy
        items={['intro', 'first', 'second', 'cta']}
        currentClassName="is-active"
        offset={-300}
      >
        <li className={li_class}>
          <Scroll type="id" element="intro">
            <a href="#">Introduction</a>
          </Scroll>
        </li>
        <li className={li_class}>
          <Scroll type="id" element="first">
            <a href="#">Running</a>
          </Scroll>
        </li>
        <li className={li_class}>
          <Scroll type="id" element="second">
            <a href="#">Projects</a>
          </Scroll>
        </li>
        <li className={li_class}>
          <Scroll type="id" element="cta">
            <a href="#">Posts</a>
          </Scroll>
        </li>

        <li id="shortcut">
          <ul>
            <li>
              <Link to="/">Posts</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </li>
      </Scrollspy>
    </nav>
  )
}

export default Nav

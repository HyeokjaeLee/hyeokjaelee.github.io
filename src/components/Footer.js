import { Link } from 'gatsby'
import React from 'react'

const Footer = (props) => (
  <footer id="footer">
    <section>
      <h2>Channel</h2>
      <dl className="alt">
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/huntaroSan"
              className="icon fa-twitter alt"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-facebook alt">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-instagram alt">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/codebushi/gatsby-starter-stellar"
              className="icon fa-github alt"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-dribbble alt">
              <span className="label">Dribbble</span>
            </a>
          </li>
        </ul>
      </dl>
    </section>
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">leehyeokjae97@gmail.com</a>
        </dd>
      </dl>
    </section>
    <p className="copyright">&copy; HyeokjaeLee © All rights reserved.</p>
  </footer>
)

export default Footer

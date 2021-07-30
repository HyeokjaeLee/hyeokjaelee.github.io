import React from 'react'

import logo from '../assets/images/logo.png'

const Header = (props) => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Hyeok_Jae</h1>
    <p>개발자를 꿈꾸는 코더.</p>
  </header>
)

export default Header

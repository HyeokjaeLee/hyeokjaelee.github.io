import React from 'react'
import Helmet from 'react-helmet'
import logo from '../assets/images/logo.png'
interface Props {
  title: string
  subTitle: string
}

const HeaderGeneric = ({ title, subTitle }: Props) => (
  <>
    <Helmet title={title} />
    <header id="header" className="alt">
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </header>
  </>
)

export default HeaderGeneric

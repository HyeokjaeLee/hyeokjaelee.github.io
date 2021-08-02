import React from 'react'
import Helmet from 'react-helmet'
interface Props {
  title: string
  subTitle: string
}

const HeaderGeneric = ({ title, subTitle }: Props) => (
  <>
    <Helmet title={title} />
    <header id="header">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </header>
  </>
)

export default HeaderGeneric

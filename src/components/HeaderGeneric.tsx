import React from 'react'
import Helmet from 'react-helmet'
interface Props {
  title: string
  slug: string
}

const HeaderGeneric = ({ title, slug }: Props) => (
  <>
    <Helmet title={title} />
    <header id="header">
      <h1>{title}</h1>
      <p>{slug}</p>
    </header>
  </>
)

export default HeaderGeneric

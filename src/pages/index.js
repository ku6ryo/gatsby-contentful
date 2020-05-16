import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>contentful</div>
    <div>{data.allContentfulTestContent.edges.map(c => {
      return <div key={c.node.title}>{c.node.title}</div>
    })}</div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulTestContent {
      edges {
        node {
          title
        }
      }
    }
  }
`

export default IndexPage

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
    />
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)

// Page Query
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

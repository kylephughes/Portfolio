import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.min.css"
import Contact from "./contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `hughes`, `react`]} />
  </Layout>
)

export default IndexPage

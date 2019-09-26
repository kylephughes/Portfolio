import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.min.css"
import Contact from "./contact"
import About from "./about"
import { Container, Card, Row, Col } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `hughes`, `react`]} />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage

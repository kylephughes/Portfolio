/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const mainDiv = {
  height:'100vh',
  position: 'relative'
};
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={mainDiv}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="mainElement">{children}</main>
        <span class="spacer"></span>
        <Footer/>
      </div> 
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

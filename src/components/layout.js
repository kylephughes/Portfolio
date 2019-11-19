import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Sidebar from "../components/sidebar"
import { Grid } from "@material-ui/core"
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
      <>
        <Grid container>
          <Grid item xs={12}>
            <Header siteTitle={data.site.siteMetadata.title} />
          </Grid>
          <Grid item xs={12} md={3}>
            <div style={{ padding: 20 }}>
              <Sidebar hideSidebar={true} />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div style={{ paddingTop: 20 }}>{children}</div>
          </Grid>
        </Grid>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

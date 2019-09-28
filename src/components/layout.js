
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import Sidebar from "../components/sidebar"
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core"
const dontRender = true
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Grid container>
        <Grid item xs={12} md={3}>
          <div style={{ padding: 20 }} >          
              <Sidebar hideSidebar={true}/>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              {children}
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "./header.css"
import styled from "styled-components"
import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Button,
  Drawer,
  IconButton,
} from "@material-ui/core"
const StyledLink = styled(Link)`
  
  color: inherit
  padding-right: 20px;
  padding-left: 20px;
  text-align: center;
  display: inline-block;
`

const Header = ({ siteTitle }) => {
  return (
    <>
      <AppBar color="default" position="relative">
        <Toolbar>
          <Typography color="primary" variant="h5">
            KH
          </Typography>
          <div className="ml-auto mr-auto">
            <StyledLink to="/about">
              {" "}
              <Typography color="primary" variant="h6">
                About
              </Typography>
            </StyledLink>
            <StyledLink to="/blog">
              <Typography color="primary" variant="h6">
                Blog
              </Typography>
            </StyledLink>
            <StyledLink to="/projects">
              <Typography color="primary" variant="h6">
                Projects
              </Typography>
            </StyledLink>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

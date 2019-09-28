import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "./header.css"
import styled from "styled-components"
const StyledLink = styled(Link)`
  color: gray;
  padding-right: 20px;
  text-align: center;
  display: inline-block;
`

const Header = ({ siteTitle }) => (
  <Navbar className="navHeader" expand="md">
    <Navbar.Brand className="navBrand" href="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
      <Nav className="ml-auto">
        <StyledLink to="/about">About</StyledLink>
      </Nav>
      <Nav>
        <StyledLink to="/blog">Blog</StyledLink>
      </Nav>
      <Nav className="mr-auto">
        <StyledLink to="/projects">Projects</StyledLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

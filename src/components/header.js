import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar,Nav} from 'react-bootstrap'
import "./header.css"
import styled from 'styled-components'
const StyledLink = styled(Link)`
  color: white;
  padding-right:20px;
  text-align: center;
  display: inline-block; 
`;

const Header = ({ siteTitle }) => (
  <Navbar className="navHeader"  expand="md">
  <Navbar.Brand style={{color:'white'}} className="navBrand" href="/">{siteTitle}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <StyledLink to="/">About Me</StyledLink>
    </Nav>
    <Nav >
      <StyledLink to="/projects">Projects</StyledLink>
    </Nav>
    <Nav >
      <StyledLink to="/contact">Contact</StyledLink>
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar,Nav} from 'react-bootstrap'
import styled from 'styled-components'
const StyledLink = styled(Link)`
  color: black;
  border: 1px solid;
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" expand="md">
  <Navbar.Brand style={{color:'white'}} href="/">{siteTitle}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
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

import React from 'react';

import styled from 'styled-components'
import './footer.css'
import Socials from './socials'
import { Container, Row, Col } from 'react-bootstrap'

const StyledFooterDiv = styled.div`
  color: white;
  height:70px;
  width:100%;
  position:relative;
  display:flex;
  flex-shrink : 0;
  background-color:#557A95;
`;
const Footer = () => {
    return (
        <StyledFooterDiv>
            <Container fluid="true">
                <Row className="justify-content-center align-items-center">
                    <Col>
                        Built with Gatsby JS, React, Bootstrap
                    </Col>
                    <Col>
                        <Socials />
                    </Col>
                </Row>
            </Container>
        </StyledFooterDiv>
    )
}

export default Footer
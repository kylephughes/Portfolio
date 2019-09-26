import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Container, Row, Col } from "react-bootstrap"
import Socials from "../components/socials"
const Contact = () => (
  <Container>
    <Row className="text-center">
      <Col>Send me some mail : kyle.hughes025@gmail.com</Col>
    </Row>
    <Row className="text-center">
      <Col>
        <Socials />
      </Col>
    </Row>
  </Container>
)

export default Contact

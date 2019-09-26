import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Container, Row, Col, Card } from "react-bootstrap"
const About = () => (
  <Container>
    <Row className="justify-content-center" style={{ padding: 10 }}>
      <Col xs={12} sm={8}>
        <Card>
          <Card.Title className="text-center">Kyle Hughes</Card.Title>
          <Card.Subtitle className="text-center text-muted">
            Software Engineer
          </Card.Subtitle>
          <hr />
          {/*Card.Text is converted to a <p> tag and will throw warning */}
          <div className="text-center">
            <Container>
              <Row>
                  I am currently working as a Software Engineer with Disney
                  Streaming Services.
              </Row>
              <Row style={{ padding: 5 }}>
                  My interests include web development and learning new front
                  technologies. Some technologies I use regularly include
                  React/Redux, Spring Boot and NodeJS.
              </Row>
              <Row style={{ padding: 5 }}>
                  In my free time I am working on a hobby project to expand my
                  knowledge of Angular, Node and Express.
              </Row>
            </Container>
          </div>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default About

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.min.css";
import "./projects.css" 
import { Container, Card,Row, Col } from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Row className="justify-content-center" style={{padding:10}}>
       <Col xs={12} sm={8}>
        <Card border="dark">
          <Card.Title className="text-center">Kyle Hughes</Card.Title>
          <Card.Subtitle className="text-center text-muted">Software Engineer</Card.Subtitle>
          <hr/>
          {/*Card.Text is converted to a <p> tag and will throw warning */}
          <div className="text-center">
          <Container>
            <Row>
              <Col>
                I am currently working as a Software Engineer with Leidos Corporation in Egg Harbor Twp, NJ.
              </Col>
            </Row>
            <Row style={{padding:5}}>
              <Col>
              My interests include web development and learning new front technologies. 
              Currently learning React & Angular in the workplace by taking the initiative to expand our tech stack
              and re-build internal web applications using each.
              </Col>
            </Row>
            <Row style={{padding:5}}>
              <Col>
                  In my free time I am working on a hobby project to expand my knowledge of Angular, Node and Express.
              </Col>
            </Row>
            </Container>
          </div>
        </Card>
       </Col>
          
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

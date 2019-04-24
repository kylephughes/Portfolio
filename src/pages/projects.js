import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card } from 'react-bootstrap'
import projects from "../data/projects.json";
import "./projects.css"
export default class Projects extends React.Component {
  render() {
    return (<Layout>
      <SEO title="Projects" />
      <Container fluid>
        <Row>
          <Col><h3 className="text-center"> Projects </h3></Col>
        </Row>
        <Row className="text-center">
          <Col>
            I have worked on many types of projects professionally with daily collboration between a small group of
          engineers and several individually. <br /><br />
            <u>A few of my individual accomplishments</u>
        </Col>
        </Row>
        <Row className="justify-content-center" style={{ paddingTop: 10 }}>
          <Col xs={12} sm={9}>
            <ul>
              <li>Rebuilt a legacy ColdFusion application with Java and the Spring Framework all while
                  building a responsive UI with Bootstrap & jQuery
            </li>
              <li>
                Built a custom filter & highlight function in vanilla JavaScript and jQuery. The function handled 
                regular expressions, multiple colors and supported overlapping matches
              </li>
              <li>
                 Developed Java tools used by Air Traffic personnel to automate reporting 
                 and distribution responsibilities
              </li>
            </ul>
          </Col>
        </Row>
        <div>
          {projects.map((project, index) => {
            return (
              <Row className="justify-content-center" key={index} style={{ paddingBottom: "25px" }}>
                <Col xs={12} sm={9}>
                  <Card>
                    <Card.Header className="text-center cardHeader">{project.title}</Card.Header>
                    <Card.Body>
                      <Card.Text>{project.description}
                        <br />
                        <br />
                      </Card.Text>
                      <hr />
                      Built With : {project.tech}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })
          }
        </div>
      </Container>
    </Layout>
    )
  }
}

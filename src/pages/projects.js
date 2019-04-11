import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card } from 'react-bootstrap'
import projects from "../data/projects.json";
import "./projects.css"
export default class Projects extends React.Component {
 render() {
   return ( <Layout>
    <SEO title="Projects" />
    <Container>
      <Row>
        <Col><h3 className="text-center"> Projects </h3></Col>
      </Row>
      <div>
      {projects.map((project,index) => {
       return (
          <Row key={index} style={{paddingBottom:"25px"}}>
            <Col>
              <Card>
                <Card.Header className="text-center cardHeader">{project.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{project.description} 
                    <br/>
                    <br/>
                  </Card.Text>
                     <hr/>
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

import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col} from 'react-bootstrap'
import Layout from "../components/layout"
const Contact = () => (
    <Layout>
        <Container>
            <Row>
                <Col className="text-center pt-3"><h3>Get in touch</h3>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>Send me some mail : kyle.hughes025@gmail.com
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default Contact;
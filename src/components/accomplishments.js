import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap';
import accomplishmentsJson from '../data/accomplishments.json';

//Use fragment short syntax
const Accomplishments = () => {
    return (
        <>
            <ListGroup>
                { accomplishmentsJson.map((accomplish,index) => {
                    return <ListGroup.Item key={index}>{accomplish.description}</ListGroup.Item>
                  })
                }
            </ListGroup>
        </>
    );
}
export default Accomplishments;
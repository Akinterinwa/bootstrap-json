// src/App.js

import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
// import productData from './Product';

export const firstName = "Oluwanifemi";

const App = () => {

    return (
        <Container style={{ margin: '0 auto'}} className="display-grid text-center justify-content-center">
            <Card style={{ width: '30rem', margin: '0 auto', backgroundColor: '#f0f0f0' }}>
                <Card.Body  className="d-grid text-center justify-content-center">
                <Image />
                    <Card.Title><Name /></Card.Title>
                    <Price />
                    <Card.Text>
                        <Description />
                    </Card.Text>

                </Card.Body>
                <a style={{ width: '14rem', margin: '10px auto' }} className="btn btn-primary">Learn More</a>
            </Card>
            <div className="mt-4">
                <h3>Hello, {firstName ? firstName : "there"}!</h3>
            </div>
        </Container>
    );
};

export default App;

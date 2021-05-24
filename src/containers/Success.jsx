import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const Success = () => {
    return (
        <Container className="min-vh-100">
            <Row>
                <Col md={6} >
                    <Alert variant="success" className="my-2 ">
                        <Alert.Heading>Hey, tu compra ha sido Exitosa</Alert.Heading>
                        <p>
                            Tu pedido llegará en tres días
                </p>
                        <hr />
                    </Alert>
                </Col>
                <Col md={6}>
                    <div className="Succes-map mt-2">
                        Google map
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Success;
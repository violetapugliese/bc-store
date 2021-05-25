import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Checkout.css'

const Payment = () => {
    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    <div className="Checkout-content">
                        <h3>Lista de precios</h3>
                        <div className="Checkout-item">
                            <div className="Checkout-element">
                                <h4>ITEM name</h4>
                                <span>$10</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="Checkout-sidebar">
                        <h3>Precio Total: $10</h3>
                        <Button variant="primary" type="submit" variant="primary">
                            Pagar
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Payment;
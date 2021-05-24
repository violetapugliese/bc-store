import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                            <button type="button">Eliminar</button>
                        </div>
                    </div>
                    <div className="Checkout-sidebar">
                        <h3>Precio Total: $10</h3>
                        <button type="button">Pagar</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Payment;
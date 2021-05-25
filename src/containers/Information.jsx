import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

const Information = () => {
    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    <h2>Information</h2>
                    <Form>
                        <Form.Group>
                            <Form.Control type="name" name="name" placeholder="Enter your First Name" />
                            <Form.Control type="name" name="name" placeholder="Enter your Last Name" />
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                            <Form.Control type="password" name="address" placeholder="Direction" />
                            <Form.Control type="password" name="city" placeholder="City" />
                            <Form.Control type="password" name="country" placeholder="Country" />
                            <Form.Control type="password" name="state" placeholder="State" />
                            <Form.Control type="password" name="cp" placeholder="CP" />
                            <Form.Control type="password" name="phone" placeholder="Phone" />
                        </Form.Group>
                    </Form>

                </Col>
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
                        <div className="FormButton">
                            <Link to="/checkout">
                                <Button variant="danger" type="submit">
                                    Cancelar
                                </Button>
                            </Link>
                            <Link to="/checkout/payment">
                                <Button variant="primary" type="submit" variant="primary">
                                    Continuar Compra
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Information;
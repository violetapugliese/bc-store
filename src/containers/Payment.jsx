import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Checkout.css'

const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <Container className="min-vh-100">
            <Row className="mt-4">
                <Col xs={12} md={6}>
                    <h3>Su compra</h3>
                    {cart.map((item) => (
                            <div className="Checkout-content">
                                <div className="Checkout-item" key={item.id}>
                                    <div className="Checkout-element">
                                        <h6>{item.title}</h6>
                                        <span>$ {item.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <div className="Checkout-sidebar">
                        <h3>{`Precio total $ ${handleSumTotal()}`}</h3>
                        <div className="FormButton ">
                            <Link to="/checkout">
                                <Button variant="danger" className="mt-2" type="submit">
                                    Cancelar
                                </Button>
                            </Link>
                            <Link >
                                <Button variant="primary" className="mt-2" type="button" variant="primary" >
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

export default Payment;
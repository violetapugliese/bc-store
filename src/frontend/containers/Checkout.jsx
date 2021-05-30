import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Checkout.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = (product, i) => () => {
        removeFromCart(product, i);
    };

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    <div className="Checkout-content">
                        {cart.length > 0 ? <h3>Lista de precios</h3> : <h3>Sin Pedidos...</h3>}
                        {cart.map((item, i) => (
                            <div className="Checkout-item" key={item.id}>
                                <div className="Checkout-element">
                                    <h4>{item.title}</h4>
                                    <span>{item.price}</span>
                                </div>
                                <button type="button" onClick={handleRemove(item, i)}>
                                <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col>
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
                        <Link to="/checkout/information">
                            <Button variant="primary" type="submit" variant="primary">
                                Continuar Compra
                            </Button>
                        </Link>
                    </div>
                )}
                </Col>

            </Row>
        </Container>

    );
}

export default Checkout;
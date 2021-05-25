import React, { useRef, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AppContext from '../context/AppContext.js';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

const Information = () => {
const { state, addToBuyer } = useContext(AppContext);
const form = useRef(null);

const { cart } = state;
const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
        'name': formData.get('name'),
        'lastname': formData.get('lastname'),
        'email':formData.get('email'), 
        'address':formData.get('address'),
        'apto':formData.get('apto'),
        'city':formData.get('city'),
        'country':formData.get('country'),
        'state':formData.get('state'),
        'cp':formData.get('cp'),
        'phone':formData.get('phone'),
    }
    addToBuyer(buyer);

}

    return (
        <Container className="min-vh-100">
            <Row>
                <Col>
                    <h2>Information</h2>
                    <Form ref={form}>
                        <Form.Group>
                            <Form.Control type="text" name="name" placeholder="Enter your First Name" />
                            <Form.Control type="text" name="lastname" placeholder="Enter your Last Name" />
                            <Form.Control type="text" name="email" placeholder="Enter email" />
                            <Form.Control type="text" name="address" placeholder="Direction" />
                            <Form.Control type="text" name="city" placeholder="City" />
                            <Form.Control type="text" name="country" placeholder="Country" />
                            <Form.Control type="text" name="state" placeholder="State" />
                            <Form.Control type="text" name="cp" placeholder="CP" />
                            <Form.Control type="text" name="phone" placeholder="Phone" />
                        </Form.Group>
                    </Form>

                </Col>
                <Col>
                    <div className="Checkout-content">
                        <h3>Su compra</h3>
                        {cart.map((item) => (
                        <div className="Checkout-item" key={item.id}>
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                <span>$ {item.price}</span>
                            </div>
                        </div>
                         ) )}
                    </div>
                    <div className="Checkout-sidebar">
                        <h3>Precio Total: $10</h3>
                        <div className="FormButton ">
                            <Link to="/checkout">
                                <Button variant="danger" className="mt-2" type="submit">
                                    Cancelar
                                </Button>
                            </Link>
                            <Link to="/checkout/payment">
                                <Button variant="primary" className="mt-2" type="button" variant="primary" onClick={handleSubmit}>
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
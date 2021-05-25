import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/Products.css';
import { Container, Col, Row } from 'react-bootstrap';

const Products = () => {
    const {state, addToCart} = useContext(AppContext);
    const { products } = state;

    const handleAddToCart = product => () => {
        addToCart(product)
    };

    return (
        <div className="Products" >
            <Container className="Products-Item" >
                <Row>
                    {products.map(product => (
                        <Col xs={12} md={4}>
                            <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Products;
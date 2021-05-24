import React from 'react';
import Product from './Product';
import '../styles/Products.css';
import { Container, Col, Row } from 'react-bootstrap';

const Products = ({ products }) => {
    return (
        <div className="Products" >
            <Container className="Products-Item" >
                <Row>
                    {products.map(product => (
                        <Col xs={12} md={4}>
                            <Product key={product.id} product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Products;
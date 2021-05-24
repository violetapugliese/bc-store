import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../styles/Product.css'

const Product = ({ product }) => {
    return (
        <div className="Product-Item">

            <Card style={{ width: '18rem'}} className="Card" >
                <Card.Img variant="top" style={{maxHeight: '10rem', minHeight: '10rem' }} className="CardImg" src={product.image} alt={product.title}/>
                <Card.Body className="CardBody">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                       <span>$ {product.price}</span>
                       <p>{product.description}</p>
                    </Card.Text>
                    <Button type="button" variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product;
import React from 'react';
import '../styles/Product.css'

const Product = ({ product, handleAddToCart }) => {
    return (
        <div className="Product-Item">
            <div className="card Card">
                <img className="CardImg" src={product.image} alt={product.title}></img>
                <div className="card-body CardBody">
                    <h5 className="card-title">{product.title}</h5>
                    <span>$ {product.price}</span>
                    <p className="card-text">{product.description}</p>
                    <button type="button"  className="btn btn-primary"  onClick={handleAddToCart(product)}>comprar</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/Products.css';

const Products = () => {
    const {state, addToCart} = useContext(AppContext);
    const { products } = state;

    const handleAddToCart = product => () => {
        addToCart(product)
    };

    return (
        <div className="Products" >
            <div className="container">
                <div className="row">
                {products.map(product => (
                    <div className="col col-md-4">
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                    </div>
                     ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
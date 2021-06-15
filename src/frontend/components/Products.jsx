import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/Products.scss';

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
                    <div key={product.id} className="col col-md-4">
                        <Product product={product} handleAddToCart={handleAddToCart}/>
                    </div>
                     ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
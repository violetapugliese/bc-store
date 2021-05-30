import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Checkout.scss';
import { Link } from 'react-router-dom';


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
        <div className="container min-vh-100">
            <div className="row">
                <div className="col">
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
                </div>
                <div className="col">
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
                        <Link to="/checkout/information">
                            <button className="btn btn-primary" type="submit">
                                Continuar Compra
                            </button>
                        </Link>
                    </div>
                )}
                </div>

            </div>
        </div>

    );
}

export default Checkout;
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../styles/Checkout.scss'

const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <div className="container min-vh-100">
            <div className="row mt-4">
                <div className="col col-md-6">
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
                                <button className="btn btn-danger mt-2" type="submit">
                                    Cancelar
                                </button>
                            </Link>
                            <Link >
                                <button className="btn btn-primary mt-2" type="button">
                                    Continuar Compra
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
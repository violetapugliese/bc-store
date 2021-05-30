import React, { useRef, useContext } from 'react';
import AppContext from '../context/AppContext.js';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Checkout.css';

const Information = () => {
const { state, addToBuyer } = useContext(AppContext);
const form = useRef(null);
const history = useHistory();
const { cart } = state;

const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
}

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
    history.push('/checkout/payment');

}

    return (
        <div className="container min-vh-100">
            <div className="row">
                <div className="col">
                    <h2>Information</h2>
                    <div className="Information-user" ref={form}>
                        <form>
                            <input className="form-control" type="text" name="name" placeholder="Enter your First Name" />
                            <input className="form-control" type="text" name="lastname" placeholder="Enter your Last Name" />
                            <input className="form-control" type="text" name="email" placeholder="Enter email" />
                            <input className="form-control" type="text" name="address" placeholder="Direction" />
                            <input className="form-control" type="text" name="city" placeholder="City" />
                            <input className="form-control" type="text" name="country" placeholder="Country" />
                            <input className="form-control" type="text" name="state" placeholder="State" />
                            <input className="form-control" type="text" name="cp" placeholder="CP" />
                            <input className="form-control" type="text" name="phone" placeholder="Phone" />
                        </form>
                    </div>

                </div>
                <div className="col">
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
                        <h3>{`Precio total $ ${handleSumTotal()}`}</h3>
                        <div className="FormButton ">
                            <Link to="/checkout">
                                <button className="btn btn-danger mt-2" type="submit">
                                    Cancelar
                                </button>
                            </Link>
                            <Link to="/checkout/payment">
                                <button className="btn btn-primary mt-2" type="button" onClick={handleSubmit}>
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

export default Information;
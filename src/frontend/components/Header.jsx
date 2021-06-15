import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Header.scss';

const Header = () => {

    const { state } = useContext(AppContext);
    const { cart } = state;

    return (
        <div className="Header">
            <nav className="navbar  navbar-dark bg-dark">
                <div className="container-fluid">
                        <Link to="/" >
                            <h1 className="navbar-brand" >LOGO</h1>
                        </Link>
                        <ul className="navbar-nav">
                            <li className="nav-item d-flex">
                                <Link to="/checkout">
                                    <i className="fas fa-shopping-cart"></i>
                                </Link>
                                {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
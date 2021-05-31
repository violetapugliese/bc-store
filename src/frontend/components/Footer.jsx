import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
    return (
        <div className="Footer" style={{ background: 'black' }}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Hecho con ♥ Violeta Pugliese 2021</p>
                    </div>
                </div>
            </div>
            <div >
                <form action="http://localhost:3030/test" method="POST">
                    <input type="hidden" name="price" value="4500" />
                    <input type="hidden" name="title" value="Frazada de polar" />
                    <input type="submit" value="Comprar ahora"
                        className="btn btn-primary col-12" />
                </form>
            </div>
        </div>
    );
}

export default Footer;
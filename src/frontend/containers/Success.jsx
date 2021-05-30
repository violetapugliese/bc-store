import React from 'react';

const Success = () => {
    return (
        <div className="Success">

            <div className="container min-vh-100">
                <div className="row">
                    <div className="col col-md-6">
                        <div className="alert alert-success" role="alert">
                            <h4 className="alert-heading">Hey, tu compra ha sido Exitosa</h4>
                            <p> Tu pedido llegará en tres días</p>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="col col-md-6 ">
                        <div className="Succes-map mt-2">
                            Google map
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="Footer" style={{background:'black'}}>
        <Container  >
            <Row>
                <Col >
            <p>Hecho con ♥ Violeta Pugliese 2021</p>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Footer;
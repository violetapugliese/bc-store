import React from 'react';
import {useState} from 'react';
import { Container, Modal, Button } from 'react-bootstrap';

function ModalProduct() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Container>

      <h1>Hello World</h1>
      <Button onClick={handleShow}>Show Modal</Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          Modal Header
        </Modal.Header>
      <Modal.Body>
        Modal Body
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Aceptar
        </Button>
        <Button type="button" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
}

export default ModalProduct;

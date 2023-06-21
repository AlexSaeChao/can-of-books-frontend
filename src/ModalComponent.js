import React from 'react';
import { Modal, Container, Form, Button } from 'react-bootstrap';

class ModalComponent extends React.Component {
  render() {
    const { showModal, closeModal, handleBookSubmit } = this.props;

    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Can some books!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="formContainer">
            <Form onSubmit={handleBookSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Button type="submit" onClick={closeModal}>Can it!</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalComponent;

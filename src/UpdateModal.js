import React from 'react';
import { Modal, Container, Form, Button } from 'react-bootstrap';


class UpdateModal extends React.Component {
  handleFormSubmit = (event) => {
    const { handleUpdateBook, book, closeModal } = this.props;
    event.preventDefault();
    handleUpdateBook(event, book._id);
    closeModal();
  };

  render() {
    const { showModal, closeModal, book } = this.props;

    if (!book) {
      return null;
    }

    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="formContainer">
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" defaultValue={book.title} />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" defaultValue={book.description} />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Rank</Form.Label>
                <Form.Control type="number" defaultValue={book.status} />
              </Form.Group>
              <Button type="submit">Update</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateModal;



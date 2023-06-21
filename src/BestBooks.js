import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Form, Button, Modal, } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    }
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    this.getAllBooks();
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  // todo: define handler to get all books 
  getAllBooks = async () => {
    let url = `${process.env.REACT_APP_BOOK_SERVER}/books`
    console.log('This is the URL', url);
    try {
      // todo: make a call to my server and hit my books endpoint

      let booksFromDB = await axios.get(url);
      console.log('This is books from BD', booksFromDB);
      // todo: save the response from my server to my state
      this.setState({
        books: booksFromDB.data
      })



    } catch (error) {
      console.log(error.message);
    }
  }

  handleBookSubmit = (event) => {
    event.preventDefault();

    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: +event.target.status.value,
    }
    this.postBook(bookObj);
  }

  postBook = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_BOOK_SERVER}/books`;
      let createdBookFromDB = await axios.post(url, bookObj);
      this.setState({
        books: [...this.state.books, createdBookFromDB.data]
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  handleDeleteBook = async (id) => {
    try {
      const url = `${process.env.REACT_APP_BOOK_SERVER}/books/${id}`;
      await axios.delete(url);

      const updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks,
        carouselKey: Date.now(),
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <>
            <Carousel key={this.state.carouselKey}>
              {this.state.books.map((book) => (
                <Carousel.Item key={book._id}>
                  <div>
                    <h3>{book.title}</h3>
                    <p>Plot Summary: {book.description}</p>
                    <p>Rating: {book.status} out of whatever you feel like.</p>
                    <img src="https://placehold.co/400" alt="gray placeholder" />
                  </div>
                  <div className="deleteButton">
                    <Carousel.Caption>
                      <Button onClick={() => this.handleDeleteBook(book._id)}>Uncan it!</Button>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            <Modal show={showModal} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Can some books!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container className="formContainer">
                  <Form onSubmit={this.handleBookSubmit}>
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
                    <Button type="submit" onClick={this.closeModal}>Can it!</Button>
                  </Form>
                </Container>
              </Modal.Body>
            </Modal>
            <Button onClick={this.openModal}>Start Canning!</Button>
          </>
        ) : (
          <h3>Book Collection is Empty</h3>
        )}
      </>
    );
  }
}


export default BestBooks;


/* <Container className="formContainer">
    <Form onSubmit={this.props.handleBookSubmit}>
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
      <Button type="submit">Can it!</Button>
    </Form>
  </Container> */
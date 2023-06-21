import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

class CarouselComponent extends React.Component {
  render() {
    const { books, handleDeleteBook } = this.props;

    return (
      <Carousel key={Date.now()}>
        {books.map((book) => (
          <Carousel.Item key={book._id}>
            <div>
              <h3>{book.title}</h3>
              <p>Plot Summary: {book.description}</p>
              <p>Rating: {book.status} out of whatever you feel like.</p>
              <img src="https://placehold.co/400" alt="gray placeholder" />
            </div>
            <div className="deleteButton">
              <Carousel.Caption>
                <Button onClick={() => handleDeleteBook(book._id)}>Uncan it!</Button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default CarouselComponent;

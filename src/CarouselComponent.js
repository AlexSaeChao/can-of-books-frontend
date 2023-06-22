import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import UpdateModal from './UpdateModal';



class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false,
      selectedBook: null,
    };
  }
  
  openUpdateModal = (book) => {
    this.setState({
      showUpdateModal: true,
      selectedBook: book
    });
  };
  
  closeUpdateModal = () => {
    this.setState({
      showUpdateModal: false,
      selectedBook: null
    });
  };
  
  render() {
    const { books, handleDeleteBook, handleUpdateBook } = this.props;
    const { showUpdateModal, selectedBook } = this.state;
    
    
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
            
            <Carousel.Caption>
              <div className="deleteButton">
                <Button onClick={() => handleDeleteBook(book._id)}>Uncan it!</Button>
                <Button variant="secondary" onClick={() => this.openUpdateModal(book)}>Re-Can it!</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        
        <UpdateModal
          showModal={showUpdateModal}
          closeModal={this.closeUpdateModal}
          handleUpdateBook={handleUpdateBook}
          book={selectedBook}
          />
      </Carousel>
    );
  }
}

export default CarouselComponent;


// class CarouselComponent extends React.Component {
//   render() {
//     const { books, handleDeleteBook, handleUpdateBook } = this.props;

//     return (
//       <Carousel key={Date.now()}>
//         {books.map((book) => (
//           <Carousel.Item key={book._id}>
//             <div>
//               <h3>{book.title}</h3>
//               <p>Plot Summary: {book.description}</p>
//               <p>Rating: {book.status} out of whatever you feel like.</p>
//               <img src="https://placehold.co/400" alt="gray placeholder" />
//             </div>
//             <div className="deleteButton">
//               <Carousel.Caption>
//                 <Button onClick={() => handleDeleteBook(book._id)}>Uncan it!</Button>
//                 <Button onClick={() => handleUpdateBook(book._id)}>Re-Can it!</Button>
//               </Carousel.Caption>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     );
//   }
// }
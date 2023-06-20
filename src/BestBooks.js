import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getAllBooks();
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  // todo: define handler to get all books 
  getAllBooks = async () => {
    try {
      // todo: make a call to my server and hit my books endpoint

      let url = `${process.env.BOOK_SERVER}/books`
      let booksFromDB = await axios.get(url);
      console.log('This is the URL', url);
      console.log('This is books from BD', booksFromDB);
      // todo: save the response from my server to my state
      this.setState({
        books: booksFromDB.data
      })



    } catch (error) {
      console.log(error.message);
    }
  }


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

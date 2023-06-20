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


  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
  
        {this.state.books.length ? (
          <div>
            <h3>Books:</h3>
            <ul>
              {this.state.books.map(book => (
                <li key={book._id}>{book.title} by {book.author}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}
export default BestBooks;

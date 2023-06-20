import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<BestBooks />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    );
  }
}

export default App;

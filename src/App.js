import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Login />
        <Logout />
        <Profile />
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

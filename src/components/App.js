import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import WineControl from './WineControl';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <WineControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
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
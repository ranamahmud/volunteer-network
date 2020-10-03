import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div >
  );
}

export default App;

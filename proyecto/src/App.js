import logo from './logo.svg';
import React from 'react';
import './App.css';

import Navbar from './components/navbar'

// sugar syntax más ordenado y entendible
function App() {
  return (


    <div className="App">
      <Navbar/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Inicio
        </p>
    
      </header>
    </div>
    

    

  );
}

export default App;

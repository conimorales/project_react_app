import logo from '../logo.svg';
import React from 'react';
import '../App.css';

import Navbar from '../components/Navbar'

// sugar syntax más ordenado y entendible
function App() {
    return (


    <div className="App">
        <Navbar/>

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Mis Proyectos
            </p>
        </header>
        </div>
        

        

    );
}

export default App;
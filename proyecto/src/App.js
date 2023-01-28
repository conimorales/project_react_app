
import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbarv.js'
import Inicio from './components/Inicio.js'
// import Contenedor from './components/componenteContenedor/ComponenteContenedor.js'


import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'


import CartContainer from './components/CartContainer/CartContainer.js'

// sugar syntax más ordenado y entendible
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path ='/' element={<Inicio/> }/>

            <Route path ='/detalle' element={<ItemDetailContainer/>}/>
            <Route path ='/detalle1' element={<ItemDetailContainer/>}/>

            <Route path ='/projects' element={<CartContainer/>}/>
            <Route path ='*' element={<Inicio/> }/>

          </Routes>
      </div>
    </BrowserRouter>




  );
}

export default App;

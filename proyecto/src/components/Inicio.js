
import React from 'react';

import Contenedor from './componenteContenedor/ComponenteContenedor.js'
import CartContainer from './CartContainer/CartContainer.js'

// sugar syntax más ordenado y entendible
function Inicio() {
    return (
        <>
            <Contenedor/>

            <CartContainer/>

        </>

    );
}

export default Inicio;

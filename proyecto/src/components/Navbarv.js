import React from 'react';


import Icon from './Cartwidget.js';



const navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Icon/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/" >Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects" >Mis proyectos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default navbar;
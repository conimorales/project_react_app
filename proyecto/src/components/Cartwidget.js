import React from 'react';
import logo from '../assets/img.png';
import '../styles/Nav.css';

const icon = () => {
    return (
        <a class="navbar-brand" href="/"> <img src={logo}  alt="logo" class="navbarlog"  /></a>

    );
}

export default icon;
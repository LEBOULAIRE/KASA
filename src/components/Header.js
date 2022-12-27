import React from 'react';
// Import de l'image Kasa 
import logo from "../assets/images/logo_kasa.png"
// import de Navlink
import { NavLink } from 'react-router-dom';
// Import de Navigation
import Navigation from "./Navigation"

const Header = () => {
    return (
        <header>
            <div>
                <NavLink to='/'>
                <img src={logo} alt= "Logo de l'entreprise casa" />
                </NavLink>
            </div>
            <Navigation />

        </header>
    );
};

export default Header;
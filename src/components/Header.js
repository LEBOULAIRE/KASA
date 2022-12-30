import React from 'react';
// Import de l'image Kasa
import logo from '../assets/images/logo_kasa.png';
// import de Navlink
import { NavLink } from 'react-router-dom';
// Import de Navigation
import Navigation from './Navigation';
// Import du css header

const Header = () => {
      return (
            <header>
                  <div>
                        <NavLink to="/">
                              <img
                                    src={logo}
                                    alt="Logo de l'entreprise casa"
                                    className="logo-header"
                              />
                        </NavLink>
                  </div>
                  <Navigation />
            </header>
      );
};

export default Header;

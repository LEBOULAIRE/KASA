import React from 'react';
// Import NaviLink pour les directions
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        
            <nav className="navigation">
                <NavLink to ="/" className={({isActive}) => (isActive ? 'navigation__active--change' : 'navigation__text--change')}>
                    <div >Accueil</div>
                </NavLink> 
                <NavLink to = "/about" className={({isActive}) => (isActive ? 'navigation__active--change' : 'navigation__text--change')}>
                    <div>A Propos</div>
                </NavLink>
            </nav>

    );
};

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <div className="mdl-layout__header-row">
        {/* Title  */}
        <span className="mdl-layout-title">Tournoi en double aléatoire</span>
        {/* Add spacer, to align navigation to the right  */}
        <div className="mdl-layout-spacer"></div>
        {/* Navigation. We hide it in small screens.  */}
        <nav className="mdl-navigation mdl-layout--large-screen-only">
            <NavLink className="mdl-navigation__link" to="/ranking">Classement</NavLink>
            <NavLink className="mdl-navigation__link" to="/rounds">Tours</NavLink>
        </nav>
    </div>
);

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Drawer = () => (
    <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Menu</span>
        <nav className="mdl-navigation">        
            <NavLink className="mdl-navigation__link" to="/ranking">Classement</NavLink>
            <NavLink className="mdl-navigation__link" to="/rounds">Tours</NavLink>
        </nav>
    </div>
);

export default Drawer;
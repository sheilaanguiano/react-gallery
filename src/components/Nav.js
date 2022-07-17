import React from 'react';
import { NavLink } from  'react-router-dom';

//Stateless Component

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to='/sculpture'>Sculpture</NavLink>
                </li>
                <li>
                    <NavLink to='/architecture'>Architecture</NavLink>
                </li>
                <li>
                    <NavLink to='/painting'>Painting</NavLink>
                </li>
            </ul>
      </nav>
    );
}

export default Nav;
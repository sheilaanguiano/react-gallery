import React from 'react';
import { NavLink } from  'react-router-dom';

//Stateles Component

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink
                        to='/sculpture' 
                        // onClick={props.queryString}
                        // id='sculpture'
                        >
                            Sculpture  
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/architecture' 
                        // onClick={props.queryString}
                        // id='architecture'
                        >
                            Architecture 
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/painting' 
                        // onClick={props.queryString}
                        // id='painting'
                        >
                            Painting  
                    </NavLink>
                </li>
            </ul>
      </nav>
    );
}

export default Nav;
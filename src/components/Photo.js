import React from 'react';

//Stateless Component

const Photo = props => {
    return (
        <li>
            <img src={props.url} alt="" />
        </li>
    );
}

export default Photo;
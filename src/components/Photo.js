import React from 'react';

//Stateles Component

const Photo = props => {
    return (
        <li>
            <img src={props.url} alt="" />

        </li>
    );
}

export default Photo;
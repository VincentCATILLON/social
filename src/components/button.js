import React from 'react';
import ButtonBS from 'react-bootstrap/Button';

// import Image from './image';
import './thumbnail.css';

const TYPE = {
    PRIMARY : 8,
    SECONDARY : 16,
} 

const Button = ({type, text, lock}) => {

    return ( 
    //     <button variant="primary">{text}</button>

    <ButtonBS variant="primary">Primary</ButtonBS>
    )
};

export default Button;
import React from 'react';

const SIZE = {
    SMALL : 8,
    MEDIUM : 16,
    LARGE : 32,
} 

const Space = ({size}) => {
    const style = {
        width:`${SIZE[size.toUpperCase()]}px`,
        height:`${SIZE[size.toUpperCase()]}px`,
    }
    return ( 
        <div style = {style}/>
    )
};

export default Space;
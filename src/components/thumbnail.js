import React from 'react';

import Image from './image';
import './thumbnail.css';

const Thumbnail = ({size, ...props}) => {
    const style={
        width:`${size}px`,
        height:`${size}px`,
    }

    return ( 
        <div className="thumbnail" style={style}>
            <Image {...props} />
        </div>
    )
};

export default Thumbnail;
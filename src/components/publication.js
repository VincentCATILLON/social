import React from 'react';

import Thumbnail from './thumbnail';
import AuthorName from './author-name';
import Image from './image';
import Space from './space';
import './publication.css';

const Publication = ({author:{firstName,lastName}, thumbnail, image}) => (
<div>
     <div className="header">
        <Thumbnail url={thumbnail} size={54} />
        <Space size="small"/>
        <AuthorName firstName={firstName} lastName={lastName}/>
    </div>
    <div className="body">
        <Image url={image}/>
    </div>   
</div>
);

export default Publication;
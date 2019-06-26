import React from 'react';

import './author-name.css';

const AuthorName = ({firstName, lastName}) => ( 
    <span className="author-name">
        {`${firstName} ${lastName}`}
    </span>
);

export default AuthorName;
import React from 'react';

import './wall.css';
import Publication from './publication';
import Button from './button'

const Wall = ({publications = [] ,onClick}) => ( 
<div className="wall">
  {publications.map( publication => (
     <Publication author={publication.user} thumbnail={publication.thumbnail} image={publication.image} />
  ) )}
  <button onClick={onClick}>Add</button>
  <Button type="LOCK" text="ADD"/>
</div>
);

export default Wall;
import React from 'react';

const styles = {
    image: {
        width: '100%',
    }
}

const Image = ({url}) => ( 
    <img src={url} style={styles.image} alt=""/>
);

export default Image;
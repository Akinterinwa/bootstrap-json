import React from 'react';
import productData from './Product';

const Description = ({description}) => {
    return (
        <>
        <h3>{productData.description}</h3>
        </>
    )
}

export default Description;
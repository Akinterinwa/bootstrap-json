import React from 'react';
import productData from './Product';

const Price = ({ price }) => {
    return <h2>{productData.price}</h2>;
};

export default Price;
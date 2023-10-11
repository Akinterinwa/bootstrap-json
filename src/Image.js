import React from "react";
import productData from './Product';
import { firstName } from "./App";

const Image = () => {
    return (
        <div>
            {firstName && (
                <img style={{ width: '26rem' }} src={productData.imageUrl} alt="Product" />
            )}
        </div>
    );
};

export default Image;
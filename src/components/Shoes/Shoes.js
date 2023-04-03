import React from 'react';
import sum from '../../utilities/sum';
import { multiply } from '../../utilities/mix';

const Shoes = () => {
    const a = 5;
    const b = 2;
    const sumResult = sum(a,b);
    const mulResult = multiply(a,b)
    return (
        <div>
            <h2>Shoes Component</h2>
            <p>Sum Result : {sumResult}</p>
            <p>Multiply Result : {mulResult}</p>
        </div>
    );
};

export default Shoes;
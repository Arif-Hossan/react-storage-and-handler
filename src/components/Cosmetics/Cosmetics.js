import React from 'react';
import { subtract } from '../../utilities/mix';
import sum from '../../utilities/sum';

const Cosmetics = () => {
    const a = 3;
    const b = 2;
    const subResult = subtract(a,b);
    const sumResult = sum(a,b)
    return (
        <div>
            <h1>Hello ,from cosmetics</h1>
            <p>Sum Result = {sumResult}</p>
            <p>Sub Result = {subResult}</p>
        </div>
    );
};

export default Cosmetics;
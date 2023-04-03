import React from 'react';
import { multiply, subtract } from '../../utilities/mix';

const Watch = () => {
    const a = 2;
    const b = 5;
    const mulResult = multiply(a,b);
    const subResult = subtract(a,b);
    return (
        <div>
            <h2>Watch Component </h2>
            <p>Subtract Result : {subResult}</p>
            <p>Multiply Result : {mulResult}</p>
        </div>
    );
};

export default Watch;
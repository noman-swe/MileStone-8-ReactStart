import React from 'react';
import minus from '../../utilities/cal';

import { add } from '../../utilities/calculate';



const Cosmetics = () => {
    const first = 55;
    const second = 65;
    const total = add(first, second)

    const calMinus = minus(second, first)
    return (
        <div>
            <h3>This is cosmetics.</h3>
            <p>{total}</p>
            <p>Minus = {calMinus}</p>

        </div>
    );
};

export default Cosmetics;
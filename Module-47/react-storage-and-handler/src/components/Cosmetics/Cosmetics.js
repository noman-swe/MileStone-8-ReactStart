import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    const first = 55;
    const second = 65;
    const total = add(first, second)
    return (
        <div>
            <h3>This is cosmetics.</h3>
            <p>{total}</p>

        </div>
    );
};

export default Cosmetics;
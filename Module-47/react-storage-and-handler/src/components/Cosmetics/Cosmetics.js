import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import minus from '../../utilities/cal';
// import { add } from '../../utilities/calculate';
import './cosmetics.css'



const Cosmetics = () => {
    /* const first = 55;
    const second = 65;
    const total = add(first, second)
    const calMinus = minus(second, first) */

    const cosmetics = [
        {
          "id": "643c3ac27c0083b7fb1aad35",
          "price": 427,
          "name": "Inez Campbell"
        },
        {
          "id": "643c3ac29b05c1d830bc0a60",
          "price": 417,
          "name": "Mayra Adams"
        },
        {
          "id": "643c3ac20d05478facfad920",
          "price": 484,
          "name": "Adkins Coleman"
        },
        {
          "id": "643c3ac25d6e52c0b5ba1d05",
          "price": 377,
          "name": "Janice Harmon"
        },
        {
          "id": "643c3ac20b512d03b995ff8f",
          "price": 403,
          "name": "Charlene Vazquez"
        },
        {
          "id": "643c3ac23dd016c1125f1b04",
          "price": 553,
          "name": "Valarie Turner"
        },
        {
          "id": "643c3ac26074a5052a13e631",
          "price": 508,
          "name": "Alexander Little"
        }
      ];
    
    return (
        <div className='cosmetic'>
            <h3>This is cosmetics.</h3>
            {/* <p>{total}</p>
            <p>Minus = {calMinus}</p> */}
            
            {
                cosmetics.map(cosmetic => <Cosmetic
                cosmetic = {cosmetic}
                key = {cosmetic.id}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;
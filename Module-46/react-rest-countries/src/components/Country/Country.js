import React from 'react';
import './Country.css';
const Country = (props) => {
    const { area, region, population, name, flags } = props.country;
    return (
        <div className='country'>
            <h3>Country Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>

        </div>
    );
};

export default Country;
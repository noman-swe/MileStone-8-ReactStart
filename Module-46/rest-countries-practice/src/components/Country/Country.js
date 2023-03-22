import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, area, region, flags, startOfWeek } = props.country;
    return (
        <div className='country bg-warning'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Start of week: {startOfWeek}</small></p>
        </div>
    );
};

export default Country;
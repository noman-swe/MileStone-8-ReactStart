import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h3>I have {props.name}</h3>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;
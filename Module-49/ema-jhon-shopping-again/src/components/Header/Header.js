import React from 'react';
import webLogo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
                <img src={webLogo} alt="" />
            </div>
            <div className="nav">
                <a href="shop">Shop</a>
                <a href="order">Order</a>
                <a href="inventory">Inventory</a>
                <a href="about">About</a>
            </div>
            
        </div>
    );
};

export default Header;
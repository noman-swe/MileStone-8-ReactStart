import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=''/>
            <div className="links">
                <a href="/shop">Shop</a>
                <a href="orders">Orders</a>
                <a href="inventory">Inventory</a>
                <a href="About">About</a>
            </div>
        </nav>
    );
};

export default Header;
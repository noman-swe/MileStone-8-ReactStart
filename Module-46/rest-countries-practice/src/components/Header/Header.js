import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/Countries">Countries</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default Header;
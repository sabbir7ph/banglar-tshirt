import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">order review</Link>
            <Link to="/about">About</Link>
            <Link to="/grandpa">Grandpa</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;
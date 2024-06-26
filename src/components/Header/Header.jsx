import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/review">Order Review</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
};

export default Header;
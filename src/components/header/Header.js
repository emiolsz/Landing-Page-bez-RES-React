import React from 'react';
import Company from '../company/Company';
import Nav from '../nav/Nav';
import './Header.css';

function Header() {
    return (
        <header className="header-section">
            <Nav />
            <Company />
        </header>
    );
}

export default Header;
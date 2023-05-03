import React from 'react';
import NavItem from '../nav-item/NavItem';
import './Nav.css';

function Nav() {
    const navLinks = [
        { href: "#specialists", text: "O nas" },
        { href: "#services", text: "Oferta" },
        { href: "#", text: "Kontakt" }
    ];

    return (
        <nav className="nav-section">
            <div className="nav-container">
                <a className="link" href="">Moja firma</a>
                <ul className="nav-container-list">
                    {navLinks.map(link => <NavItem key={"link-" + link.href} href={link.href} text={link.text} />)}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
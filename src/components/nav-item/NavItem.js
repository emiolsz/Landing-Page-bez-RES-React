import React from 'react';
import Link from '../link/Link';
import './NavItem.css';

function NavItem({ href, text }) {
    return (
        <li className="nav-container-list-item">
            <Link href={href} text={text} />
        </li>
    );
}

export default NavItem;
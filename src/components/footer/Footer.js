import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-copyrights">
                    Web&Snap Emilia Olszewska - wszelkie prawa zastrzeżone, 2023
                </div>
                <div className="footer-icons">
                    <i className="fa-brands fa-instagram icon"></i>
                    <i className="fa-brands fa-square-facebook icon"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
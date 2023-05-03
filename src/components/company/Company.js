import React from 'react';
import './Company.css';

function Company() {
    return (
        <div className="company-description-wrapper">
            <div className="company-description">
                <h1 className="heading-1">
                    Nasza firma oferuje najwyższej jakości produkty
                </h1>
                <p className="additional-description">Nie wierz nam na słowo - sprawdź</p>
                <a className="link" href="#services">Oferta</a>
            </div>
            <img src="./foto.jpg" alt="Tree by the sea" />
            <div className="shadow"></div>
        </div>
    );
}

export default Company;
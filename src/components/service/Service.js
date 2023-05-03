import React from 'react';
import './Service.css';

function Service({ name, isNew }) {
    return (
        isNew ?
            (<div className="services-list-item">
                <div className="services-list-item-text-wrapper">
                    <div className="services-list-item-title">{name}</div>
                    <div className="services-list-item-sub-title">(Nowość)</div>
                </div>
            </div>) :
            (<div className="services-list-item">
                <div className="services-list-item-title">{name}</div>
            </div>)
    );
}

export default Service;
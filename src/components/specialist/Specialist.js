import React from 'react';
import './Specialist.css';

function Specialist({ name, description, order }) {
    const specialistsClasses = `specialist-container-image specialist-${order}`;

    return (
        <div className="specialist-container-info">
            <div className={specialistsClasses} ></div>
            <div className="specialist-container-description">
                <h3 className="heading-3">{name}</h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Specialist;
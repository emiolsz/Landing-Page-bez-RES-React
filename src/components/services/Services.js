import React from 'react';
import Service from '../service/Service';
import './Services.css';

function Services() {
    const serivcesInformation = [
        { name: "Usługa 1", isNew: true },
        { name: "Usługa 2" },
        { name: "Usługa 3" },
        { name: "Usługa 4" },
        { name: "Usługa 5" },
        { name: "Usługa 6" },
    ]
    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <div className="services-container-title">
                    Czym zajmuje się nasza firma?
                </div>
                <div className="services-list">
                    {serivcesInformation.map(service => <Service key={service.name} name={service.name} isNew={service.isNew} />)}
                </div>
            </div>
        </section>
    );
}

export default Services;
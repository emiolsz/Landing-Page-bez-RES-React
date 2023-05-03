import React from 'react';
import Specialist from '../specialist/Specialist';
import './Specialists.css';

function Specialists() {
    const specialistInformation = [
        {
            name: "Marek Filiński [dział prawny]",
            description: `Marek Filiński [ dział prawny ] Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi vel massa et lacus egestas
                cursus a non magna. Fusce scelerisque blandit nunc, id malesuada
                ex lobortis a. Integer felis nisi, tempor elementum lorem in,
                varius pellentesque ligula. Duis efficitur lacinia enim, non
                tincidunt libero ultrices in.`,
            order: "first"
        },
        {
            name: "Edyta Malutka [ dział handlowy]",
            description: `Edyta Malutka [ dział Handlowy ] Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi vel massa et lacus egestas
            cursus a non magna. Fusce scelerisque blandit nunc, id malesuada
            ex lobortis a. Integer felis nisi, tempor elementum lorem in,
            varius pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`,
            order: "second"
        }
    ];
    return (
        <section id="specialists" className="specialists">
            <div className="specialist-container">
                <div className="specialist-container-title">Nasi specjaliści</div>
                {specialistInformation.map((specialist, index) => <Specialist key={"specialist-" + index} name={specialist.name} description={specialist.description} order={specialist.order} />)}
            </div>
        </section>
    );
}

export default Specialists;
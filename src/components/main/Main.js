import React from 'react';
import Services from '../services/Services';
import Specialists from '../specialists/Specialists';
import './Main.css';

function Main() {
    return (
        <main className="main-section">
            <Specialists />
            <Services />
        </main>
    );
}

export default Main;
import React from 'react';
import './Pumpkin.css';

const pumpkin = (props) => {
    return (
        <section className="pumpkin__container">
            <div className="pumpkin__first-row">
                <p className="pumpkin__text">Рецепт тыквенного крем-супа</p>
                <p className="pumpkin__text pumpkin__time">1 час</p>
            </div>
        </section>
    )
}

export default pumpkin;
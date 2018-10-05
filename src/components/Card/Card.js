import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const card = (props) => (
    <section className={props.style}>
        <div className="card__container-image">
            <img className="card__image" src={props.image} alt="Карточка" draggable="false"/>
        </div>
        <Link to={props.link} className="card__container-title" draggable="false">
            <p className="сard__text">{props.title}</p>
        </Link>
    </section>
)

export default card;
import React from 'react';
import './Element.css';

const element = (props) => {
    return (
        <div className="element">
            <img src={props.image} alt="Фото статьи" />
            <span className="element__date">{props.date}</span>
            <span className="element__title">{props.title}</span>
        </div>
    )
}

export default element;
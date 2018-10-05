import React from 'react';
import './Articles.css';

const articles = (props) => {
    return (
        <div className="allNotes__container">
            {props.children}
        </div>
    )
}

export default articles;
import React from 'react';
import './Article.css';

const article = (props) => {
    return (
        <div className="note__container">
            {props.children}
        </div>
    )
}

export default article;
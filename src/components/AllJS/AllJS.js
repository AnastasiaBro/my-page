import React from 'react';
import Element from '../Element/Element';
import { Link } from 'react-router-dom';
import Articles from '../../hoc/Articles/Articles';

import js from '../../assets/images/js.jpg';


const elements = [
    {
        path: '/aboutjavascript',
        image: js,
        title: 'Немного о JavaScript'
    }
]

const allJS = (props) => {
    return (
        <Articles>
            <h2 className="allNotes__title">Статьи о JS</h2>
            <ul className="allNotes__list">
                {(elements).map((item, index) => {
                    return <li className="allNotes__item" key={index}><Link to={item.path}><Element image={item.image} title={item.title} /></Link></li>
                })}
            </ul>
        </Articles>
    )
}

export default allJS;
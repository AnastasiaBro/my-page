import React from 'react';
import Element from '../Element/Element';
import { Link } from 'react-router-dom';
import Articles from '../../hoc/Articles/Articles';

import london from '../../assets/images/london.jpg';

const elements = [
    {
        path: '/london',
        image: london,
        title: 'Go to London!'
    }
]

const travel = (props) => {
    return (
        <Articles>
            <h2 className="allNotes__title">Путешествия</h2>
            <ul className="allNotes__list">
                {(elements).map((item, index) => {
                    return <li className="allNotes__item" key={index}><Link to={item.path}><Element image={item.image} title={item.title} /></Link></li>
                })}
            </ul>
        </Articles>
    )
}

export default travel;
import React from 'react';
import Element from '../Element/Element';
import { Link } from 'react-router-dom';
import Articles from '../../hoc/Articles/Articles';

import cat from '../../assets/images/cat.jpg';

const notes = [
    {
        path: '/amineko',
        image: cat,
        title: 'Кот Аминеко'
    }
]

const allKniting = (props) => {
    return (
        <Articles>
            <h2 className="allNotes__title">Вязание игрушек</h2>
            <ul className="allNotes__list">
                {(notes).map((item, index) => {
                    return <li className="allNotes__item" key={index}><Link to={item.path}><Element image={item.image} title={item.title} /></Link></li>
                })}
            </ul>
        </Articles>
    )
}

export default allKniting;
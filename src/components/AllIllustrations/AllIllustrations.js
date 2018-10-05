import React from 'react';
import Element from '../Element/Element';
import { Link } from 'react-router-dom';
import Articles from '../../hoc/Articles/Articles';

import octopus from '../../assets/images/octopus.jpg';


const elements = [
    {
        path: '/octopus',
        image: octopus,
        date: '18/09/2018',
        title: 'Первый урок в школе векторной иллюстрации Pixel'
    }
]

const allIllustrations = (props) => {
    return (
        <Articles>
            <h2 className="allNotes__title">Все иллюстрации</h2>
            <ul className="allNotes__list">
                {(elements).map((item, index) => {
                    return <li className="allNotes__item" key={index}><Link to={item.path}><Element image={item.image} date={item.date} title={item.title} /></Link></li>
                })}
            </ul>
        </Articles>
    )
}

export default allIllustrations;
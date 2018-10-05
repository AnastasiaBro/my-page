import React from 'react';
import Element from '../Element/Element';
import { Link } from 'react-router-dom';
import Articles from '../../hoc/Articles/Articles';

import pumpkin from '../../assets/images/pumpkin.jpg';


const elements = [
    {
        path: '/pumpkin',
        image: pumpkin,
        title: 'Тыквенный крем-суп'
    }
]

const allRecipes = (props) => {
    return (
        <Articles>
            <h2 className="allNotes__title">Рецепты</h2>
            <ul className="allNotes__list">
                {(elements).map((item, index) => {
                    return <li className="allNotes__item" key={index}><Link to={item.path}><Element image={item.image} title={item.title} /></Link></li>
                })}
            </ul>
        </Articles>
    )
}

export default allRecipes;
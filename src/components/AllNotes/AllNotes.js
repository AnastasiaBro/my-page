import React from 'react';
import Element from '../Element/Element';
import { Link } from 'react-router-dom';
import Articles from '../../hoc/Articles/Articles';

import cat from '../../assets/images/cat.jpg';
import pumpkin from '../../assets/images/pumpkin.jpg';
import london from '../../assets/images/london.jpg';
import js from '../../assets/images/js.jpg'
import octopus from '../../assets/images/octopus.jpg'

// import { Route } from 'react-router-dom';
// import Amineko from '../Amineko/Amineko';
// import Pumpkin from '../Pumpkin/Pumpkin';
// import London from '../London/London';


const notes = [
    {
        path: '/london',
        image: london,
        date: '',
        title: 'Go to London!'
    },
    {
        path: '/pumpkin',
        image: pumpkin,
        date: '',
        title: 'Тыквенный крем-суп'
    },
    {
        path: '/amineko',
        image: cat,
        date: '',
        title: 'Кот Аминеко'
    },
    {
        path: '/aboutjavascript',
        image: js,
        date: '',
        title: 'Немного o JavaScript'
    },
    {
        path: '/octopus',
        image: octopus,
        date: '18/09/2018',
        title: 'Первый урок в школе векторной иллюстрации Pixel'
    }
]

const allNotes = (props) => {
    return (
        <Articles>
            <h2 className="allNotes__title">Все статьи</h2>
            <ul className="allNotes__list">
                {(notes).map((item, index) => {
                    return <li className="allNotes__item" key={index}><Link to={item.path}><Element image={item.image} date={item.date} title={item.title} /></Link></li>
                })}
            </ul>
            {/* <div>
                <Route path={props.match.url + '/amineko'} component={Amineko} />
                <Route path={props.match.url + '/pumpkin'} component={Pumpkin} />
                <Route path={props.match.url + '/london'} component={London} />
            </div> */}
        </Articles>
    )
}

export default allNotes;
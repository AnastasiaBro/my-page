import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const header = (props) => {
    return (
        <header className="page-header">
            <nav className="main-nav">
              <Link to="/my-page">Все статьи</Link>
              <Link to="/recipes">Рецепты</Link>
              <Link to="/illustrations">Иллюстрации</Link>
              <Link to="/javascript">JavaScript</Link>
              <Link to="/kniting">Вязание игрушек</Link>
              <Link to="/travel">Путешествия</Link>
            </nav>
        </header>
    )
}

export default header;
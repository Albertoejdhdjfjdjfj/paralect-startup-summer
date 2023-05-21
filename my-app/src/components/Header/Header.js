import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>
        <img src={logo} /> Jobored{' '}
      </h1>
      <nav>
        <div>
          <NavLink exact to="/">
            Поиск Вакансий
          </NavLink>
          <NavLink to="/favorites">Избранное</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1>
        <img src={logo} /> Jobored{' '}
      </h1>
      <nav>
        <div>
          <span onClick={() => navigate('/')}>Поиск Вакансий</span>
          <span onClick={() => navigate('/favorites')}>Избранное</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

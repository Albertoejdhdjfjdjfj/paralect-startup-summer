import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const isActive = (path) => {
    if (location.pathname === path) {
      return true;
    } 
    return false;
  };

  return (
    <header>
      <div>
        <img src={logo} />
        <h1>Jobored</h1>
      </div>
      <nav>
          <a className={isActive('/') ? 'active_link' : ''} onClick={() => navigate('/')}>
            Поиск Вакансий
          </a>
          <a
            className={isActive('/favorites') ? 'active_link' : ''}
            onClick={() => navigate('/favorites')}
          >
            Избранное
          </a>
      </nav>
      <div>
        
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { useNavigate } from 'react-router';
import icon from '../../../assets/images/empty-favorites.svg';
import './EmptyFavorites.css';

const EmptyFavorites = () => {
  const navigate = useNavigate();

  return (
    <div className="empty_favorites">
      <img src={icon} />
      <p>Упс, здесь еще ничего нет!</p>
      <button onClick={() => navigate('/')}>Поиск Вакансий</button>
    </div>
  );
};

export default EmptyFavorites;

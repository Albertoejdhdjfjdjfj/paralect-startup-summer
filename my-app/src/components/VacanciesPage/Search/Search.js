import React from 'react';
import search from '../../../assets/images/search.svg';
import './Search.css';

const Search = () => {
  return (
    <div className="search">
      <img src={search} />
      <input placeholder="Введите название вакансии" />
      <button>Поиск</button>
    </div>
  );
};

export default Search;

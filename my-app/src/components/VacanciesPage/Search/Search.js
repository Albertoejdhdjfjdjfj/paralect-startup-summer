import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../redux/actions/actions';
import search from '../../../assets/images/search.svg';
import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  return (
    <div className="search">
      <img src={search} />
      <input onChange={(e) => setText(e.target.value)} placeholder="Введите название вакансии" />
      <button onClick={() => dispatch(setSearch(text))}>Поиск</button>
    </div>
  );
};

export default Search;

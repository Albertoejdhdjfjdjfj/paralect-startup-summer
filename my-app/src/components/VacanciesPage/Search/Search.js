import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch, fetchVacancies } from '../../../redux/actions/actions';
import search from '../../../assets/images/search.svg';
import './Search.css';

const Search = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const dispatchText = () => {
    dispatch(fetchVacancies({ filter: filter, search: text, numPage: 1 }));
    dispatch(setSearch(text));
  };

  return (
    <div className="search">
      <img src={search} />
      <input onChange={(e) => setText(e.target.value)} placeholder="Введите название вакансии" />
      <button onClick={dispatchText}>Поиск</button>
    </div>
  );
};

export default Search;

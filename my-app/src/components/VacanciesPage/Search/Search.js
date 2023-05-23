import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useDisplay} from '../../../assets/hooks/hooks'
import { setSearch } from '../../../redux/actions/actions';
import search from '../../../assets/images/search.svg';
import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const [focus, changeFocus] = useDisplay();
  const [text, setText] = useState('');

  const dispatchText = () => {
    dispatch(setSearch(text));
  };

  useEffect(() => {
    dispatch(setSearch(''));
  }, []);

  return ( 
    <div className={focus ? 'focus_search' : ' search'}>
      <img src={search} />
      <input onFocus={changeFocus}
        onBlur={changeFocus} onChange={(e) => setText(e.target.value)} placeholder="Введите название вакансии" />
      <button onClick={dispatchText}>Поиск</button>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetAll, fetchBranches, fetchVacancies } from '../../../redux/actions/actions';
import Select from '../../../assets/components/Select/Select';
import SalaryFrom from '../../../assets/components/Salary/SalaryFrom';
import reset from '../../../assets/images/reset.svg';
import './Filter.css';

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const cleanFilters = () => {
    dispatch(resetAll());
  };

  useEffect(() => {
    dispatch(fetchBranches());
  }, []);

  return (
    <div className="filter">
      <span>
        <p>Фильтры</p>{' '}
        <button onClick={cleanFilters}>
          Сбросить все <img src={reset} />
        </button>
      </span>
      <div>
        <span>Отрасль</span>
        <Select />
        <span>Оклад</span>
        <SalaryFrom />
        <input onChange={(e) => setSalaryTo(e.target.value)} placeholder="До" type="number" />
        <button onClick={() => dispatch(fetchVacancies(search, filter, 1))}>Применить</button>
      </div>
    </div>
  );
};

export default Filter;

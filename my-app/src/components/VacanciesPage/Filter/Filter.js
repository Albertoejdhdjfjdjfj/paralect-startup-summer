import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetAll,
  fetchBranches,
  fetchVacancies,
  setNumPage
} from '../../../redux/actions/actions';
import Select from '../../../assets/components/Select/Select';
import SalaryFrom from '../../../assets/components/Salary/SalaryFrom';
import SalaryTo from '../../../assets/components/Salary/SalaryTo';
import './Filter.css';

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const cleanFilters = () => {
    dispatch(resetAll());
    dispatch(
      fetchVacancies({
        filter: { branch: '', salaryFrom: null, salaryTo: null },
        search: search,
        numPage: 1
      })
    );
    dispatch(setNumPage(1));
  };

  const applyFiltes = () => {
    dispatch(fetchVacancies({ filter: filter, search: search, numPage: 1 }));
    dispatch(setNumPage(1));
  };

  useEffect(() => {
    dispatch(fetchBranches());
  }, []);

  return (
    <div className="filter">
      <span>
        <p>Фильтры</p>{' '}
        <button onClick={cleanFilters}>
          Сбросить все <a></a>
        </button>
      </span>
      <div>
        <span>Отрасль</span>
        <Select />
        <span>Оклад</span>
        <SalaryFrom />
        <SalaryTo />
        <button data-elem="search-button" onClick={applyFiltes}>
          Применить
        </button>
      </div>
    </div>
  );
};

export default Filter;

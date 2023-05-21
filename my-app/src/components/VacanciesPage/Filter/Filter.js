import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetAll } from '../../../redux/actions/actions';
import { fetchBranches, fetchVacancies } from '../../../redux/actions/actions';
import reset from '../../../assets/images/reset.svg';
import './Filter.css';

const Filter = () => {
  const [branch, setBranch] = useState('');
  const [salaryFrom, setSalaryFrom] = useState(null);
  const [salaryTo, setSalaryTo] = useState(null);

  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branches);
  const search = useSelector((state) => state.search);

  const applyFilters = () => {
    dispatch(
      setFilter({
        branch: branch,
        salary_from: salaryFrom,
        salary_to: salaryTo
      })
    );

    dispatch(
      fetchVacancies({
        filter: {
          branch: branch,
          salaryFrom: salaryFrom,
          salaryTo: salaryTo
        },
        search: search,
        numPage: 1
      })
    );
  };

  useEffect(() => {
    dispatch(fetchBranches());
  }, []);

  return (
    <div className="filter">
      <span>
        <p>Фильтры</p>{' '}
        <button onClick={() => dispatch(resetAll())}>
          Сбросить все <img src={reset} />
        </button>
      </span>
      <div>
        <span>Отрасль</span>
        <select
          defaultValue="option1"
          className={branch === '' ? 'unchecked' : ''}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option hidden value="option1">
            Выберете отрасль
          </option>
          {branches.map((item) => (
            <option key={item.key} value={item.key}>
              {item.title_rus}
            </option>
          ))}
        </select>
        <span>Оклад</span>
        <input onChange={(e) => setSalaryFrom(e.target.value)} placeholder="От" type="number" />
        <input onChange={(e) => setSalaryTo(e.target.value)} placeholder="До" type="number" />
        <button onClick={applyFilters}>Применить</button>
      </div>
    </div>
  );
};

export default Filter;

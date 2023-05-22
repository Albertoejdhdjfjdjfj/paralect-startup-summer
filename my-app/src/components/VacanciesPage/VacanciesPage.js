import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBranches, fetchVacancies, resetAll, setSearch } from '../../redux/actions/actions';
import { getToken } from '../../assets/functions/functions';
import Cookies from 'js-cookie';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Vacancies from '../Vacancies/Vacancies';
import './VacanciesPage.css';

const VacanciesPage = () => {
  const vacancies = useSelector((state) => state.vacancies);
  const dispatch = useDispatch();

  const dispatchVacancies = () => {
    dispatch(
      fetchVacancies({
        filter: {
          branch: '',
          salary_from: null,
          salary_to: null
        },
        search: '',
        numPage: 1
      })
    );
  };

  useEffect(() => {
    async function checkToken() {
      if (!Cookies.get('token')) {
        await getToken();
      }
      dispatch(fetchBranches());
      dispatch(resetAll());
      dispatch(setSearch(''));
      dispatchVacancies();
    }
    checkToken();
  }, []);

  return (
    <div className="vacancies_page">
      <Filter />
      <div className="search__cards">
        <Search />
        <Vacancies data={vacancies} />
      </div>
    </div>
  );
};

export default VacanciesPage;

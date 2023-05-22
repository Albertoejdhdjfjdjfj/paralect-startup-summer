import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVacancies } from '../../redux/actions/actions';
import { getToken } from '../../assets/functions/functions';
import Cookies from 'js-cookie';
import Pagination from '../../assets/components/Pagination/Pagination';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Vacancies from '../Vacancies/Vacancies';
import './VacanciesPage.css';

const VacanciesPage = () => {
  const vacancies = useSelector((state) => state.vacancies);
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkToken() {
      if (!Cookies.get('token')) {
        await getToken();
      }
    }
    checkToken();
  }, []);

  useEffect(() => {
    dispatch(fetchVacancies({ filter: filter, search: search, page: page }));
  }, [page, filter, search]);

  return (
    <div className="vacancies_page">
      <Filter />
      <div className="search__cards">
        <Search />
        <Vacancies data={vacancies} />
        <Pagination/>
      </div>
    </div>
  );
};

export default VacanciesPage;

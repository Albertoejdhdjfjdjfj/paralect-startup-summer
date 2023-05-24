import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVacancies } from '../../redux/actions/actions';
import { getToken } from '../../assets/functions/functions';
import { resetAll } from '../../redux/actions/actions';
import Cookies from 'js-cookie';
import Pagination from '../../assets/components/Pagination/Pagination';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Vacancies from '../Vacancies/Vacancies';
import { num_pages } from '../../assets/constans/constans';
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
    dispatch(resetAll());
    checkToken();
    dispatch(fetchVacancies({ filter: filter, search: search, numPage: page }));
  }, []);

  useEffect(() => {
    dispatch(fetchVacancies({ filter: filter, search: search, numPage: page }));
  }, [page, search]);

  return (
    <div className="vacancies_page">
      <Filter />
      <div className="search__cards">
        <Search />
        <Vacancies data={vacancies} />
        <Pagination length={num_pages} />
      </div>
    </div>
  );
};

export default VacanciesPage;

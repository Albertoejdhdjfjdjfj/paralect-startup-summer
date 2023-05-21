import React from 'react';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import 'VacanciesPage.css';

const VacanciesPage = () => {
  return (
    <div className="vacancies_page">
      <Filter />
      <div>
        <Search />
      </div>
    </div>
  );
};

export default VacanciesPage;

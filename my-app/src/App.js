import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getToken } from './assets/functions/functions';
import Header from './components/Header/Header';
import VacancyPage from './components/VacancyPage/VacancyPage';
import VacanciesPage from './components/VacanciesPage/VacanciesPage';

const App = () => {
  useEffect(() => {
    Cookies.get('token') ? '' : getToken();
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<VacanciesPage />} />
        <Route path="/:id" element={<VacancyPage />} />
        <Route path="/favorites" />
      </Routes>
    </div>
  );
};

export default App;

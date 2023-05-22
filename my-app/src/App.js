import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import VacancyPage from './components/VacancyPage/VacancyPage';
import VacanciesPage from './components/VacanciesPage/VacanciesPage';
import FavoritesPage from './components/FavoritesPage/FavoritesPage';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<VacanciesPage />} />
        <Route path="/:id" element={<VacancyPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;

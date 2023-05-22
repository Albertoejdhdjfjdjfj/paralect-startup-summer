import React from 'react';
import Vacancies from '../Vacancies/Vacancies';
import { useLocalStorage } from '../../assets/hooks/hooks';
const FavoritesPage = () => {
  const [favorites] = useLocalStorage();
  return <Vacancies data={favorites} />;
};

export default FavoritesPage;

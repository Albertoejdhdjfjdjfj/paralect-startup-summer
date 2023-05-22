import React from 'react';
import Vacancies from '../Vacancies/Vacancies';
import EmptyFavorites from './helpers/EmptyFavorites';
import { useLocalStorage } from '../../assets/hooks/hooks';

const FavoritesPage = () => {
  const [favorites] = useLocalStorage();
  return favorites.length === 0 ? <EmptyFavorites /> : <Vacancies data={favorites} />;
};

export default FavoritesPage;

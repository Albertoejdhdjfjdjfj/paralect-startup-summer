import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocalStorage, useLocalStoragePagination } from '../../assets/hooks/hooks';
import Pagination from '../../assets/components/Pagination/Pagination';
import Vacancies from '../Vacancies/Vacancies';
import EmptyFavorites from './helpers/EmptyFavorites';
import './FavoritesPage.css'

const FavoritesPage = () => {
  const [favorites] = useLocalStorage();
  const [pageData, setPageData] = useLocalStoragePagination(4);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    setPageData(page);
  }, [page]);

  return favorites.length === 0 ? (
    <EmptyFavorites />
  ) : (
    <div className="favorites">
      <Vacancies data={pageData} />
      <Pagination length={favorites.length} />
    </div>
  );
};

export default FavoritesPage;

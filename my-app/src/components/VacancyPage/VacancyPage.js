/* eslint-disable */
import React, { useEffect } from 'react';
import { useVacancy, useLocalStorage } from '../../assets/hooks/hooks';
import { parsePayments } from '../../assets/functions/functions';
import Loader from '../../assets/components/Loader/Loader';
import point from '../../assets/images/point.svg';
import location from '../../assets/images/location.svg';
import './VacancyPage.css';

const VacancyPage = () => {
  const [vacancy, setVacancy] = useVacancy();
  const [favorites, addFavorites, deleteFavorites] = useLocalStorage();
  const isActive = (id) => {
    if (favorites.some((el) => el.id === id)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setVacancy();
  }, []);

  return (
    <div className="vacancy" data-elem={`vacancy-${vacancy.id}`}>
      {!vacancy && <Loader />}
      {vacancy && (
        <div>
          <p>
            <span>{vacancy.profession}</span>
            <a
              data-elem={`vacancy-${vacancy.id}-shortlist-button`}
              onClick={() =>
                isActive(vacancy.id) ? deleteFavorites(vacancy) : addFavorites(vacancy)
              }
              className={isActive(vacancy.id) ? 'active_vacancy' : 'unactive_vacancy'}
            ></a>
          </p>
          <div>
            <span>
              з/п {parsePayments(vacancy.payment_from, vacancy.payment_to, vacancy.currency)}
            </span>
            <img src={point} />
            <p>{vacancy.type_of_work.title}</p>
          </div>
          <span>
            <img src={location} />
            <p>{vacancy.town.title}</p>
          </span>
        </div>
      )}
      {vacancy && <span dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}></span>}
    </div>
  );
};

export default VacancyPage;

import React, { useEffect } from 'react';
import { useVacancy, useLocalStorage } from '../../assets/hooks/hooks';
import { parsePayments } from '../../assets/functions/functions';
import point from '../../assets/images/point.svg';
import location from '../../assets/images/location.svg';
import './VacancyPage.css';

const VacancyPage = () => {
  const [vacancy, setVacancy] = useVacancy();
  const [favorites, addFavorites, deleteFavorites] = useLocalStorage();
  useEffect(() => {
    setVacancy();
  }, []);

  return (
    vacancy && (
      <div className="vacancy">
        <div>
          <p>
            <span>{vacancy.profession}</span>
            <a
              onClick={() =>
                favorites.some((el) => el.id === vacancy.id)
                  ? deleteFavorites(vacancy)
                  : addFavorites(vacancy)
              }
              className={
                favorites.some((el) => el.id === vacancy.id) ? 'active_vacancy' : 'unactive_vacancy'
              }
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
        <span dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}></span>
      </div>
    )
  );
};

export default VacancyPage;

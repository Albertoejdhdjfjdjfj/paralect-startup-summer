import React from 'react';
import { parsePayments } from '../../assets/functions/functions';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../assets/hooks/hooks';
import Loader from '../../assets/components/Loader/Loader';
import point from '../../assets/images/point.svg';
import location from '../../assets/images/location.svg';
import './Vacancies.css';

const Vacancies = ({ data }) => {
  const [favorites, addFavorites, deleteFavorites] = useLocalStorage();
  const navigate = useNavigate();

  return (
    <div className="vacancies">
      {!data && <Loader />}
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>
              <span onClick={() => navigate(`/${item.id}`)}>{item.profession}</span>{' '}
              <a
                onClick={() =>
                  favorites.some((el) => el.id === item.id)
                    ? deleteFavorites(item)
                    : addFavorites(item)
                }
                className={
                  favorites.some((el) => el.id === item.id) ? 'active_vacancy' : 'unactive_vacancy'
                }
              ></a>
            </p>
            <div>
              <span>з/п {parsePayments(item.payment_from, item.payment_to, item.currency)}</span>
              <img src={point} />
              <p>{item.type_of_work.title}</p>
            </div>
            <span>
              <img src={location} />
              <p>{item.town.title}</p>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Vacancies;

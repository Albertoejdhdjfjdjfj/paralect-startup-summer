import React from 'react';
import { pasrePayments } from '../../assets/functions/functions';
import { useNavigate } from 'react-router-dom';
import star from '../../assets/images/star.svg';
import point from '../../assets/images/point.svg';
import location from '../../assets/images/location.svg';
import './Vacancies.css';

const Vacancies = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="vacancies">
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>
              <span onClick={() => navigate(`/${item.id}`)}>{item.profession}</span>{' '}
              <img src={star} />
            </p>
            <div>
              <span>з/п {pasrePayments(item.payment_from, item.payment_to, item.currency)}</span>
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

import React,{useEffect} from 'react';
import { useVacancy } from '../../assets/hooks/hooks';
import { pasrePayments } from '../../assets/functions/functions';
import star from '../../assets/images/star.svg'
import point from '../../assets/images/point.svg'
import location from '../../assets/images/location.svg'
import './VacanciesPage.css'

const VacancyPage = () => {
  const [vacancy,setVacancy]=useVacancy();

  useEffect(()=>{
    setVacancy();
  },[])

  return vacancy&&<div className="vacancy">
     <div>
            <p>
              <span onClick={() => navigate(`/${vacancy.id}`)}>{vacancy.profession}</span>{' '}
              <img src={star} />
            </p>
            <div>
              <span>з/п {pasrePayments(vacancy.payment_from, vacancy.payment_to, vacancy.currency)}</span>
              <img src={point} />
              <p>{vacancy.type_of_work.title}</p>
            </div>
            <span>
              <img src={location} />
              <p>{vacancy.town.title}</p>
            </span>
          </div>
  </div>;
};

export default VacancyPage;

import { useState } from 'react';
import { useParams } from 'react-router';
import { getVacancy } from '../functions/functions';

export function useDisplay(display = false) {
  const [active, setActive] = useState(display);
  const handleActive = () => {
    setActive(!active);
  };
  return [active, handleActive];
}

export function useVacancy() {
  const {id}=useParams();
  const [vacancy,setVacancy]=useState(false)
  const handleVacancy = async() => {
    setVacancy(await getVacancy(id))
  };
  return [vacancy, handleVacancy];
}

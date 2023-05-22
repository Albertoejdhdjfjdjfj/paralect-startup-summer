import { useState, useEffect } from 'react';
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
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(false);
  const handleVacancy = async () => {
    setVacancy(await getVacancy(id));
  };
  return [vacancy, handleVacancy];
}

export function useLocalStorage(arrayName = 'favorites') {
  const [array, setArray] = useState(JSON.parse(localStorage.getItem(arrayName)) || []);

  const addElement = (el) => {
    const newArray = [...array, el];
    setArray(newArray);
    localStorage.setItem(arrayName, JSON.stringify(newArray));
  };

  const deleteElement = (el) => {
    const newArr = array.filter((item) => el.id !== item.id);
    setArray(newArr);
    localStorage.setItem(arrayName, JSON.stringify(newArr));
  };

  return [array, addElement, deleteElement];
}

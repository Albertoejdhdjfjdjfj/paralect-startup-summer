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
  const data = JSON.parse(localStorage.getItem(arrayName));
  const [array, setArray] = useState(data || []);

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



export function useLocalStoragePagination(limit, numPage = 1, arrayName = 'favorites') {
  const data = JSON.parse(localStorage.getItem(arrayName));
  const start = (numPage - 1) * limit;
  const end = start + limit;

  const [page, setPage] = useState(data ? data.slice(start, end) : []);

  const handlePage = (num) => {
    const start = (num - 1) * limit;
    const end = start + limit;
    setPage(data ? data.slice(start, end) : []);
  };

  return [page, handlePage];
}

export function useSalaryInput(defaultvalue = null, step = 1) {
  const [value, setValue] = useState(defaultvalue);
  const addValue = () => {
    setValue(value === null ? step : value + step);
  };

  const subValue = () => {
    const sub = value - step;
    if (sub >= 0 && value !== null) {
      setValue(sub);
    }
  };

  const changeValue = (val) => {
    setValue(val);
  };

  return [value, addValue, subValue, changeValue];
}

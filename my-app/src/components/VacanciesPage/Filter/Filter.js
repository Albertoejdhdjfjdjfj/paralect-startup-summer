import React from 'react';
import reset from '../../../assets/images/reset.svg';
const Filter = () => {
  return (
    <div className="filter">
      <div>
        <p>Фильтры</p>{' '}
        <button>
          Сбросить все <img src={reset} />
        </button>
      </div>
      <div>
        <span>Отрасль</span>
        <select name="branch">
          <option value=""></option>
        </select>
        <span>Оклад</span>
        <input placeholder="От" type="number" />
        <input placeholder="До" type="number" />
        <button>Применить</button>
      </div>
    </div>
  );
};

export default Filter;

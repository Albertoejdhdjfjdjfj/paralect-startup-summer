import React from 'react';
import { useSalaryInput, useDisplay } from '../../hooks/hooks';
import down from '../../images/arrow_down_input.svg';
import up from '../../images/arrow_up_input.svg';
import './Salary.css';

const SalaryFrom = () => {
  const [value, addValue, subValue, setValue] = useSalaryInput();
  const [focus, changeFocus] = useDisplay();

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className={focus ? 'focus_input' : ' input'}>
      <input
        value={value}
        onFocus={changeFocus}
        onBlur={changeFocus}
        onChange={handleChange}
        type="number"
        placeholder="От"
      />{' '}
      <div>
        <img onClick={() => addValue()} src={up} />
        <img onClick={() => subValue()} src={down} />
      </div>
    </div>
  );
};

export default SalaryFrom;

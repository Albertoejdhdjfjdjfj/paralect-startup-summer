import React, { useEffect } from 'react';
import { useSalaryInput, useDisplay } from '../../hooks/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/actions/actions';
import down from '../../images/arrow_down_input.svg';
import up from '../../images/arrow_up_input.svg';
import './Salary.css';

const SalaryTo = () => {
  const [value, addValue, subValue, setValue] = useSalaryInput();
  const [focus, changeFocus] = useDisplay();
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(Number(event.target.value));
    dispatch(
      setFilter({
        branch: filter.branch,
        salaryFrom: filter.salaryFrom,
        salaryTo: Number(event.target.value)
      })
    );
  };

  useEffect(() => {
    dispatch(
      setFilter({ branch: filter.branch, salaryFrom: filter.salaryFrom, salaryTo: Number(value) })
    );
  }, [value]);

  return (
    <div className={focus ? 'focus_input' : ' input'}>
      <input
        data-elem="salary-to-input"
        value={filter.salaryTo ? value : ''}
        onFocus={changeFocus}
        onBlur={changeFocus}
        onChange={handleChange}
        type="number"
        placeholder="До"
      />{' '}
      <div>
        <img onClick={() => addValue()} src={up} />
        <img onClick={() => subValue()} src={down} />
      </div>
    </div>
  );
};

export default SalaryTo;

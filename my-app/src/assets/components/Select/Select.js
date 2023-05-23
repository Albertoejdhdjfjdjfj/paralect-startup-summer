import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDisplay } from '../../hooks/hooks';
import { setFilter } from '../../../redux/actions/actions';
import arrow_down from '../../images/arrow-down.svg';
import arrow_up from '../../images/arrow-up.svg';
import './Select.css';

const Select = () => {
  const [branchName, setBranchName] = useState('');
  const [active, changeActive] = useDisplay();
  const branches = useSelector((state) => state.branches);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const dispatchFilter = (item) => {
    dispatch(
      setFilter({ branch: item.key, salaryFrom: filter.salaryFrom, salaryTo: filter.salaryTo })
    );
    setBranchName(item.title_rus);
  };

  return (
    <div className="select">
      <div className={active ? 'active_select_field' : '' + ' select_field'}>
        {filter.branch === '' ? <p className="default_option">Выберете отрасль </p> : branchName}
        <img onClick={changeActive} src={active ? arrow_up : arrow_down} />
      </div>
      {active && (
        <div className="select_options">
          {branches.map((item) => (
            <div
              className={item.key === filter.branch ? 'active_option' : ''}
              onClick={() => dispatchFilter(item)}
              key={item.key}
            >
              {item.title_rus}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

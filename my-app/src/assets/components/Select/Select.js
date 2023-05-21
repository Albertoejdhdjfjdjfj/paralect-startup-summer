import React, { useState } from 'react';
import { useDisplay } from '../../hooks/hooks';
import arrow_down from '../../images/arrow-down.svg';
import arrow_up from '../../images/arrow-up.svg';

const Select = ({ placeholder, data }) => {
  const [active, changeActive] = useDisplay();
  return (
    <div>
      <div>
        <img onClick={changeActive} src={active ? arrow_up : arrow_down} />
      </div>
      {active && <div></div>}
    </div>
  );
};

export default Select;

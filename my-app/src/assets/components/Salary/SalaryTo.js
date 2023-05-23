import React from 'react';

const SalaryTo = () => {
  return (<div className={focus ? 'focus_input' : ' input'}>
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
</div>)
};

export default SalaryTo;

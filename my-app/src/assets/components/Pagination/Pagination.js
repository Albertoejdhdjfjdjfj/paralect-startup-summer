import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNumPage } from '../../../redux/actions/actions';
import './Pagination.css';

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [right, setRight] = useState(0);
  const length=500;
  const dispatch = useDispatch();

  const handlePage = (page) => {
    if (length >= page && page > 0) {
      setPage(page);
      dispatch(setNumPage(page));
    }
  };

  const handleButtonPlus = () => {
    if (right < (length - 3) * 40) setRight(right + 40);
  };

  const handleButtonMinus = () => {
    if (right > 0) setRight(right - 40);
  };

  useEffect(() => {
    dispatch(setNumPage(1));
  }, []);

  return (
    <div className="pagination">
      <div onClick={handleButtonMinus}>-</div>
      <span>
        <div style={{ right: `${right}px` }}>
          <div>
            {Array.from({ length: length }, (_, i) => (
              <div
                onClick={() => handlePage(i + 1)}
                className={page === i + 1 ? 'active_page' : ''}
                key={i}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </span>
      <div onClick={handleButtonPlus}>+</div>
    </div>
  );
};

export default Pagination;

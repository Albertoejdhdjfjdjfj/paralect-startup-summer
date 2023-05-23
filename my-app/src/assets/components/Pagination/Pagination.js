import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setNumPage } from '../../../redux/actions/actions';
import {useDisplay} from '../../hooks/hooks'
import forward from '../../images/arrow_forward.svg';
import back from '../../images/arrow_back.svg';
import './Pagination.css';

const Pagination = ({ length }) => {
  const [page, setPage] = useState(1);
  const [right, setRight] = useState(0);
  const [num, setNum] = useState(1);

  const dispatch = useDispatch();
  const numPage=useSelector((state)=>state.page)

  const handlePage = (page) => {
    if (length >= page && page > 0) {
      setPage(page);
      dispatch(setNumPage(page));
    }
  };

  const handleButtonRight = () => {
    if (right < (length-(num)*3) * 40) {setRight(right + 40)}
  };

  const handleButtonLeft = () => {
    if (right > 0) setRight(right - 40);
  };

  useEffect(() => {
    dispatch(setNumPage(1));
    length / 4 < 1 ? '' : setNum(Math.ceil(length / 4 ));
  }, []); 

  useEffect(() => {
    setPage(numPage)
  }, [numPage]);
 
  return (
    <div className="pagination">
      <div onClick={handleButtonLeft} style={right > 0?{}:{opacity:0.5}}> <img src={back}/></div>
      <span>
        <div style={{ right: `${right}px` }}>
          <div>
            {Array.from({ length: num }, (_, i) => (
              <button
                onClick={() => handlePage(i + 1)}
                className={page === i + 1 ? 'active_page' : ''}
                key={i}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </span>
      <div onClick={handleButtonRight} style={right < (length-(num)*3) * 40?{}:{opacity:0.5}}><img src={forward}/></div>
    </div>
  );
};

export default Pagination;

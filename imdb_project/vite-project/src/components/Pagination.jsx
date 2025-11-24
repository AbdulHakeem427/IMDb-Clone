import React from 'react'
import PropTypes from 'prop-types';

function Pagination({nextPageFn , previosuPageFn , pageNumber}) {
  return (
      <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center'>
        <div onClick={previosuPageFn} className='px-8'><i className="fa-solid fa-arrow-left"></i></div>
        <div>{pageNumber}</div>
        <div onClick={nextPageFn} className='px-8'><i className="fa-solid fa-arrow-right"></i></div>
      </div>
  )
}

Pagination.propTypes = {
  nextPageFn: PropTypes.func.isRequired,
  previosuPageFn: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default Pagination
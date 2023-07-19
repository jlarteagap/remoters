import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const PreviousButton = ({ isNotFirstPage, prevPage }) => (
  <button
    className={`button ${isNotFirstPage ? "is-danger is-outlined" : "is-outlined"}`}
    disabled={!isNotFirstPage}
    onClick={prevPage}
  >
    <FaAngleLeft /> Anterior
  </button>
);

const NextButton = ({ isNotLastPage, nextPage }) => (
  <button
    className={`button ${isNotLastPage ? "is-danger is-outlined" : "is-outlined"}`}
    disabled={!isNotLastPage}
    onClick={nextPage}
  >
    Siguiente <FaAngleRight />
  </button>
);

const Paginator = ({ actual, total, limit, prevPage, nextPage }) => {
  const totalPages = Math.ceil(total / limit);
  const isNotFirstPage = actual !== 1;
  const isNotLastPage = actual !== totalPages;

  return (
    <div className={`paginator ${total <= limit ? "is-hidden" : ""}`}>
      <PreviousButton isNotFirstPage={isNotFirstPage} prevPage={prevPage} />
      <NextButton isNotLastPage={isNotLastPage} nextPage={nextPage} />
    </div>
  );
};

Paginator.propTypes = {
  actual: PropTypes.number,
  total: PropTypes.string,
  limit: PropTypes.number,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func
}
export default Paginator

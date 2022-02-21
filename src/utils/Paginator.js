import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
// eslint-disable-next-line react/prop-types
const Paginator = ({ actual, total, limit, prevPage, nextPage }) => {
  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(Math.ceil(total / limit))

  const btnPrev =
    actual !== 1 ? (
      <button className="button is-danger is-outlined" onClick={prevPage}>
        <FaAngleLeft /> Anterior
      </button>
    ) : (
      <button className="button is-outlined" disabled onClick={prevPage}>
        <FaAngleLeft /> Anterior
      </button>
    )

  const btnNext =
    actual !== pages ? (
      <button className="button is-danger is-outlined" onClick={nextPage}>
        Siguiente <FaAngleRight />
      </button>
    ) : (
      <button className="button is-outlined" disabled onClick={nextPage}>
        Siguiente <FaAngleRight />
      </button>
    )

  return (
    <div className={`paginator ${total <= limit ? 'is-hidden' : ''} `}>
      {btnPrev}
      {btnNext}
    </div>
  )
}
Paginator.propTypes = {
  actual: PropTypes.number,
  limit: PropTypes.number,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func
}
export default Paginator
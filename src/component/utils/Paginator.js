import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
const Paginator = ({ actual, total, limit, prevPage, nextPage }) => {
  const pages = useState(Math.ceil(total / limit))

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
      <button className="btn btn-disabled" disabled onClick={nextPage}>
        Siguiente <FaAngleRight />
      </button>
    )

  return (
    <div className={actual > pages ? 'displayNone' : 'paginator'}>
      {btnPrev}
      {btnNext}
    </div>
  )
}
Paginator.propTypes = {
  actual: PropTypes.number,
  total: PropTypes.number,
  limit: PropTypes.number,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func
}
export default Paginator

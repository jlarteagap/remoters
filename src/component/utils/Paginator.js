import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Paginator = ({ actual, total, limit, prevPage, nextPage }) => {
  const pages = useState(Math.ceil(total / limit))

  const btnPrev = (actual !== 1)
    ? <button className="btn btn-outline-red" onClick={prevPage}>&laquo; Anterior</button>
    : <button className="btn btn-disabled" disabled onClick={prevPage}>&laquo; Anterior</button>

  const btnNext = (actual !== pages)
    ? <button className="btn btn-outline-red"
            onClick={nextPage}>Siguiente &raquo;</button>
    : <button className="btn btn-disabled" disabled
        onClick={nextPage}>Siguiente &raquo;</button>

  return (
            <div className={(actual > pages) ? 'displayNone' : 'paginator'} >
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

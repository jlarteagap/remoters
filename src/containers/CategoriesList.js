import React from 'react'
import Categories from '../component/jobs/Categories'
import Sidebar from '../component/sidebar/Sidebar'
import PropTypes from 'prop-types'

const CategoriesList = ({ nextPage, prevPage, page, reset }) => {
  return (
    <div className="home">
      <div className="home__jobs">
        <Categories
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          reset={reset}
        />
      </div>
      <div className="home__sidebar">
        <Sidebar reset={reset} />
      </div>
    </div>
  )
}

CategoriesList.propTypes = {
  nextPage: PropTypes.func,
  prevPage: PropTypes.func,
  page: PropTypes.number,
  reset: PropTypes.func
}
export default CategoriesList

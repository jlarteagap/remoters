import React from 'react'
import Categories from '../component/jobs/Categories'
import Sidebar from '../component/sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const CategoriesList = ({ nextPage, prevPage, page, reset }) => {
  const location = useLocation()
  const path = location.pathname.replaceAll('_', ' ').substring(1)
  const arr = path.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  const category = arr.join(' ')

  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ofertas de trabajo en {category} | Reclutop</title>
        <meta
          name="description"
          content={`Encuentra las mejores ofertas laborales en ${category} en Bolivia`}
        />
        <meta name="author" content="Jorge Luis Arteaga" />
        <meta name="copyright" content="Jorge Luis Arteaga" />
        <meta name="robots" content="index" />

        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content="Trabajos en Bolivia en tecnología" />
        <meta property="og:type" content="”article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
      </Helmet>
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

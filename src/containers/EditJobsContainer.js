/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom/'
import EditJob from '../component/Add/EditJobs'
import { Menu } from '../component/dashboard/Menu'

import { GET_JOBS } from '../Graphql/Query'

const EditJobsContainer = props => {
  const { id } = props.match.params
  console.log('🚀 ~ file: EditJobsContainer.js ~ line 10 ~ id', id)
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Editar empleo un nuevo empleo | </title>
        <meta
          name="description"
          content="Encuentra a los mejores profesionales en tecnología en Bolivia"
        />
        <meta name="author" content="Jorge Luis Arteaga" />
        <meta name="copyright" content="Jorge Luis Arteaga" />
        <meta name="robots" content="index" />

        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content="Agrega un nuevo empleo" />
        <meta property="og:type" content="”article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <div className="home">
        <Menu />
        <div className="home__jobs">
          <EditJob />
        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(EditJobsContainer)

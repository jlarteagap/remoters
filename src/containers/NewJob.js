import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { FaBullhorn } from 'react-icons/fa'
import AddJobs from '../component/add/AddJobs'

const NewJob = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Agrega un nuevo empleo</title>
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
      <div className="home__jobs">
        <AddJobs />
      </div>
      <div className="home__sidebar">
        <div className="box p-4 has-text-centered">
          <div className="is-flex is-justify-content-center my-5">
            <FaBullhorn size={42} />
          </div>
          El 10% de los ingresos por publicidad serán donados a albergues para
          animales abandonados.
        </div>
      </div>
    </div>
  </Fragment>
)

export default NewJob

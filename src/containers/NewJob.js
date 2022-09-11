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
      <aside className="home__sidebar">
        <section className="box p-4 has-text-centered">
          <div className="is-flex is-justify-content-center my-5">
            <FaBullhorn size={42} />
          </div>
          La publicacion estará activa por 15 días en la página principal. Si
          desea agregar mas dias, vuelva a activar la publicación por 7 días más
        </section>
        <section className="p-5">
          <p className="is-size-7 has-text-centered">
            El adminitrador se reserva el derecho de eliminar la publicación en
            caso de no cumplir con las reglas.
          </p>
        </section>
      </aside>
    </div>
  </Fragment>
)

export default NewJob

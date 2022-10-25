import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import PropTypes from 'prop-types'

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const { page } = useContext(AppContext)

  return (
    <section
      className={`hero is-relative is-medium ${
        page.actual > 1 ? 'is-hidden' : ''
      } `}
    >
      <div className="hero-body">
        <div className="has-text-centered">
          <p className="title">
            Principal bolsa de trabajo para desarrolladores, creativos y todo
            profesional en tecnología
          </p>
          <p className="subtitle mt-5">
            Especializada en oportunidades y talento técnico remoto y local
          </p>
          <div className="is-flex is-justify-content-center pt-5">
            <div className="iconScroll"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
Hero.propTypes = {
  page: PropTypes.string
}
export default Hero

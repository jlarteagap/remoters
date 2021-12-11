import React from 'react'
import JobIcon from './JobIcon'
import DEFAULT_IMAGES from '../../assets/img/default.jpeg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Job = ({ job }) => {
  const { company, position, city, link, category, remote } = job

  const [companies] = company

  let logoImage
  companies.logo ? (logoImage = companies.logo) : (logoImage = DEFAULT_IMAGES)

  let iconRemote
  if (remote) {
    iconRemote = <JobIcon category="REMOTE" />
  }
  return (
    <div className="card card--job">
      <div className="card__img">
        <img src={logoImage} alt={companies.name} />
      </div>
      <div className="card__header">
        <h2 className="card__header--title">
          <a href={link} target="_blank" rel="noreferrer">
            {position}
          </a>
        </h2>
        <div className="card__header--sub">{companies.name}</div>
        <span className="job__city">
          <FaMapMarkerAlt /> {city.replace('_', ' ')}
        </span>
      </div>
      <div className="card__body">
        <div className="job__info">
          <div className="icons-info">
            {iconRemote}
            <JobIcon category={category} />
          </div>
          <div className="job__button-position">
            <a className="job__button job__button-shareButton" href="#link">
              Compartir
            </a>
            <a
              className="job__button"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Aplicar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
Job.propTypes = {
  job: PropTypes.array
}
export default Job

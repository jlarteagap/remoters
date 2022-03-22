import React from 'react'
import JobIcon from './JobIcon'
import DEFAULT_IMAGES from '../../assets/img/default.jpeg'
import {
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaNetworkWired,
  FaRegBuilding
} from 'react-icons/fa'
import PropTypes from 'prop-types'

const Job = ({ job }) => {
  const {
    company,
    position,
    link,
    city,
    country,
    category,
    remote,
    type,
    salary,
    money
  } = job
  const [companies] = company

  let logoImage
  companies.logo ? (logoImage = companies.logo) : (logoImage = DEFAULT_IMAGES)

  let iconRemote
  if (remote) {
    iconRemote = (
      <div className="icon icon--remote">
        <JobIcon category="REMOTE" />
        <span className="button is-small is-warning is-light">Home Office</span>
      </div>
    )
  }
  return (
    <div className="card card--job p-3 mb-5">
      <div className="card__img">
        <img src={logoImage} alt={companies.name} />
      </div>
      <div className="card__body">
        <h2 className="card__body--title m-0">
          <a href={link} target="_blank" rel="noreferrer">
            {position}
          </a>
        </h2>
        <div className="card__body--sub is-flex is-align-items-center">
          <FaRegBuilding className="mr-3" />
          {companies.name}
        </div>
        <div className="is-flex is-align-items-center is-size-7">
          <FaNetworkWired className="mr-3" />{' '}
          {type ? type.replace('_', ' ') : ''}
        </div>
        <div
          className={`is-flex is-align-items-center is-size-7 ${
            salary ? '' : 'is-hidden'
          }`}
        >
          <FaMoneyBillAlt className="mr-3" /> {money} {salary}
        </div>
        <span
          className={`job__city is-size-7 ${
            city && country ? '' : 'is-hidden'
          }`}
        >
          {console.log(city)}
          <FaMapMarkerAlt /> {city.replace('_', ' ')} - {country}
        </span>
      </div>
      <div className="card__body">
        <div className="job__info">
          <div className="icons-info">
            {iconRemote}
            <JobIcon category={category} />
          </div>
          <div className="job__button-position">
            <a className="button job__button-shareButton" href="#link">
              Compartir
            </a>
            <a
              className="button is-success"
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
  job: PropTypes.object
}
export default Job

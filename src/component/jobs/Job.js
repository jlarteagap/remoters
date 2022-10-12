/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import JobIcon from './JobIcon'

import {
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaNetworkWired,
  FaRegBuilding,
  FaClock
} from 'react-icons/fa'
import PropTypes from 'prop-types'
import useUpdateActive from './hooks/useUpdateActive'
import { Link } from 'react-router-dom'
import ShowDateInJobs from '../../utils/ShowDate'

const Job = ({ job }) => {
  const { IsActivePostJob } = useUpdateActive()
  const {
    id,
    link,
    category,
    remote,
    company,
    location,
    content,
    deletedAt,
    createdAt,
    slug
  } = job

  const transformCreateAtDate = new Date(createdAt * 1)
  // Check this for update active o desactive job post
  const todayDate = new Date().toISOString()
  if (todayDate >= deletedAt) {
    IsActivePostJob(id)
  }

  let iconRemote
  if (remote) {
    iconRemote = (
      <div className="icon icon--remote">
        <JobIcon category="REMOTE" />
        <span className="button is-small is-warning is-light">
          Trabajo Remoto
        </span>
      </div>
    )
  }

  return (
    <div className="card card--job p-5 mb-5">
      <div className="card__body">
        <h2 className="card__body--title m-0">
          <Link className="is-flex is-align-items-center" to={`/post/${slug}`}>
            {content.title}
          </Link>
        </h2>
        <div className="help is-flex is-align-items-center">
            <FaClock size={16} className="mr-3" />
            <ShowDateInJobs date={transformCreateAtDate} />
          </div>
        <div className={'card__body--sub is-flex is-align-items-center'}>
          <FaRegBuilding size={16} className="mr-3" />
          {company.name}
        </div>
        <div
          className={`is-flex is-align-items-center is-size-7 ${
            content.contract ? ' ' : 'is-hidden'
          }`}
        >
          <FaNetworkWired size={16} className="mr-3" />{' '}
          {content.contract.replace('_', ' ')}
        </div>
        <div
          className={`is-flex is-align-items-center is-size-7 ${
            content.salary ? '' : 'is-hidden'
          }`}
        >
          <FaMoneyBillAlt size={16} className="mr-3" /> {content.currency}{' '}
          {content.salary}
        </div>
        <div className={'is-flex is-align-items-center is-size-7'}>
          <FaMapMarkerAlt size={16} className="mr-3" /> {location.country.name}
          {location.city.name && (
            <span className="is-capitalized">
              {`${' - '} ${location.city.name.replace('_', ' ')} `}
            </span>
          )}
        </div>
      </div>
      <div className="card__body">
        <div className="job__info">
          <div className="icons-info is-align-items-center">
            {iconRemote}
            <button className="button is-small is-primary is-light icon__category ml-1">
              <JobIcon category={category} /> {category.replace('_', ' ')}
            </button>
          </div>

          <div className="job__button-position">
            <a className="button job__button-shareButton" href="#link">
              Compartir
            </a>
            {content
              ? (
              <Link className="button is-success" to={`/post/${slug}`}>
                Ver detalles
              </Link>
                )
              : (
              <a
                className="button is-success"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Aplicar
              </a>
                )}
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

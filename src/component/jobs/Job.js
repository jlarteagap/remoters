/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import JobIcon from './JobIcon'

import {
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaNetworkWired,
  FaRegBuilding,
  FaExternalLinkAlt
} from 'react-icons/fa'
import jobCSS from '../../../public/css/Job.module.css'
import PropTypes from 'prop-types'
import useUpdateActive from './hooks/useUpdateActive'
// import Link from 'next/link'

const Job = ({ job }) => {
  const { IsActivePostJob } = useUpdateActive()
  const {
    id,
    position,
    link,
    city,
    country,
    category,
    remote,
    type,
    salary,
    money,
    companySimple,
    company,
    location,
    content,
    deletedAt,
    slug
  } = job
  // Check this for update active o desactive job post
  IsActivePostJob(id, deletedAt)

  let iconRemote
  if (remote) {
    iconRemote = (
      <div className={`icon ${jobCSS.iconRemote}`}>
        <JobIcon category="REMOTE" />
        <span className="button is-small is-warning is-light">
          Trabajo Remoto
        </span>
      </div>
    )
  }

  const titlePosition = content !== null && content.title
  const companyJob = company !== null && company.name
  const countryNew = location !== null && location.country.name
  const currencyContent = content !== null && content.currency
  const salaryContent = content !== null && content.salary
  const contractContent = content !== null && content.contract

  return (
    <div className={`card ${jobCSS.cardJob} p-5 mb-5`}>
      <div className={`${jobCSS.card__body}`}>
        <h2 className={`${jobCSS.card__bodyTitle} m-0`}>
          {content ? (
            <a className="is-flex is-align-items-center" href={`/post/${slug}`}>
              <a>
                {position !== null ? position : titlePosition}{' '}
                <FaExternalLinkAlt size={12} className="ml-4" />
              </a>
            </a>
          ) : (
            <a href={link}>{position !== null ? position : titlePosition}</a>
          )}
        </h2>
        <div className={`is-flex is-align-items-center`}>
          <FaRegBuilding className="mr-3" />
          {companySimple !== null ? companySimple : companyJob}
        </div>
        <div
          className={`is-flex is-align-items-center is-size-7 ${
            type || contractContent ? ' ' : 'is-hidden'
          }`}
        >
          <FaNetworkWired className="mr-3" />{' '}
          {type !== null
            ? type.replace('_', ' ')
            : contractContent.replace('_', ' ')}
        </div>
        <div
          className={`is-flex is-align-items-center is-size-7 ${
            salary || salaryContent ? '' : 'is-hidden'
          }`}
        >
          <FaMoneyBillAlt className="mr-3" />{' '}
          {money !== null ? money : currencyContent}{' '}
          {salary !== null ? salary : salaryContent}
        </div>
        <div
          className={`${jobCSS.job__city} is-size-7 ${
            city || countryNew ? '' : 'is-hidden'
          }`}
        >
          <FaMapMarkerAlt />{' '}
          {city !== null
            ? city.replace('_', ' ')
            : location.city.name.toUpperCase().replace('_', ' ')}
          {' - '} {country !== null ? country : countryNew}
        </div>
      </div>
      <div className={`${jobCSS.card__body}`}>
        <div className={`${jobCSS.job__info}`}>
          <div className={`${jobCSS.iconsInfo}`}>
            {iconRemote}
            <JobIcon category={`${category}`} />
          </div>
          <div className={`${jobCSS.job__buttonPosition}`}>
            <a
              className={`button ${jobCSS.job__buttonShareButton}`}
              href="#link"
            >
              Compartir
            </a>
            {content ? (
              <a className="button is-success" to={`/post/${slug}`}>
                Aplicar
              </a>
            ) : (
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

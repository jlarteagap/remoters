/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react'
import JobIcon from '@utils/JobIcon'

import {
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaNetworkWired,
  FaRegBuilding,
  FaClock
} from 'react-icons/fa'
import jobCSS from '@public/css/Job.module.css'
import PropTypes from 'prop-types'
import useUpdateActive from './hooks/useUpdateActive'
import Link from 'next/link'
import ShowDateInJobs from '@utils/ShowDate'
import ShowCategoryName from '@utils/ShowCategoryName'

const Job = ({ job }) => {
  const { IsActivePostJob } = useUpdateActive()
  const {
    id,
    category,
    remote,
    company,
    location,
    content,
    deletedAt,
    slug,
    updatedAt
  } = job

  const transformCreateAtDate = new Date(updatedAt * 1)
  // Check this for update active o desactive job post
  const todayDate = new Date().toISOString()

  useEffect(() => {
    if (todayDate >= deletedAt) {
      IsActivePostJob(id)
    }
  }, [])

  let iconRemote
  if (remote) {
    iconRemote = (
      <div className={`icon ${jobCSS.iconRemote}`}>
        <JobIcon category="REMOTE" />
        <span
          className={`${jobCSS.icon__text} button is-small is-warning is-light`}
        >
          Trabajo Remoto
        </span>
      </div>
    )
  }

  return (
    <div className={`card ${jobCSS.cardJob} p-5 mb-5`}>
      <div
        className={`${jobCSS.jobHeader} is-flex is-justify-content-space-between is-align-items-center`}
      >
        <h2 className={`${jobCSS.card__bodyTitle} m-0`}>
          <Link
            className="is-flex is-align-items-center"
            href={`/post/${slug}`}
            legacyBehavior
          >
            {content.title}
          </Link>
        </h2>

        <div className={`${jobCSS.iconsInfo} is-align-items-center`}>
          {iconRemote}
          <button
            className={`${jobCSS.icon__category} button is-small is-primary is-light ml-1`}
          >
            <JobIcon category={`${category}`} />
            <span className={jobCSS.icon__text}>
              <ShowCategoryName category={category} />
            </span>
          </button>
        </div>
      </div>
      <div className={`${jobCSS.card__body}`}>
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
              {`${' - '} ${location.city.name.replaceAll(/_+/g, ' ')} `}
            </span>
          )}
        </div>
      </div>
      <div className={`${jobCSS.card__body}`}>
        <div className={`${jobCSS.job__info}`}>
          <div className={`${jobCSS.job__buttonPosition}`}>
            <a
              className={`button ${jobCSS.job__buttonShareButton}`}
              href="#link"
            >
              Compartir
            </a>
            <Link href={`/post/${slug}`} className="button is-success">
              Aplicar
            </Link>
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

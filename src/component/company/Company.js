import React, { useContext } from 'react'
import DEFAULT_IMAGES from '@public/image/posting.svg'
import DeleteButton from '../../utils/DeleteButton'
import Job from '@public/css/Job.module.css'
import { AuthContext } from '../../context/auth'
import EditButton from '../../utils/Editbutton'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import { LogoUpload } from './LogoUpload'
const Company = ({ company }) => {
  const { user } = useContext(AuthContext)

  const { id, name, site, description, username, logo } = company

  const router = useRouter()
  const path = router.asPath

  let logoImage
  logo ? (logoImage = logo) : (logoImage = DEFAULT_IMAGES.src)

  return (
    <div className={`card ${Job.cardJob} mb-3 p-3`}>
      <div className={Job.card__img}>
        <div className="is-relative">
          <div
            className="button is-rounded is-info is-small is-light"
            style={{ top: '-10px', right: 0, position: 'absolute' }}
          >
            <LogoUpload company={name} id={id} />
          </div>
        </div>
        <img src={logoImage} alt={name} width={200} height={200} />
      </div>
      <div className={Job.card__header}>
        <h2 className="card__header--title is-size-5 has-text-weight-medium">
          {name}
        </h2>
        <div className="card__header--sub">
          <a href={site} target="_target">
            {site}
          </a>
        </div>
        <p>{description}</p>
      </div>

      <div>
        {user && user.email === username && (
          <div className="is-flex is-justify-content-space-around">
            <EditButton companyID={id} />
            <DeleteButton companyId={id} path={path} companyName={name} />
          </div>
        )}
      </div>
    </div>
  )
}

Company.propTypes = {
  company: PropTypes.object
}
export default Company

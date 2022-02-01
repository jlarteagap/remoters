import React, { useContext } from 'react'
import DEFAULT_IMAGES from '../../assets/img/default.jpeg'
import DeleteButton from '../../utils/DeleteButton'

import { AuthContext } from '../../context/auth'
import EditButton from '../../utils/Editbutton'
import PropTypes from 'prop-types'

const Company = ({ company }) => {
  const { user } = useContext(AuthContext)
  const { id, name, site, description, username, logo } = company

  let logoImage
  logo ? (logoImage = logo) : (logoImage = DEFAULT_IMAGES)

  return (
    <div className="card card--job mb-3 p-3">
      <div className="card__img">
        <img src={logoImage} alt="DEFAUL IMAGES" />
      </div>
      <div className="card__header">
        <h2 className="card__header--title">{name}</h2>
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
            <DeleteButton companyId={id} />
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

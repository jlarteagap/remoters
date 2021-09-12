import React from 'react'
import DEFAULT_IMAGES from '../../assets/img/default.jpeg'

const Company = ({company}) => {
    const { name, site, description, logo } = company

    return(
        <div className="card card--job">
            <div className="card__img">
                <img src={DEFAULT_IMAGES} alt="DEFAUL IMAGES" />
            </div>
            <div className="card__header">
                <h2 className="card__header--title">{name}</h2>
                <div className="card__header--sub"><a href={site} target="_target">{site}</a></div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Company
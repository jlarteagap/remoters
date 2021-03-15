import React from 'react'
import icons from '../../img/icons.png'

const JobList = (props) => {
    const {id, company, position, city, link, category} = props.job

    return (
        <div className="card" key={id}>
            <div className="card__header">
                <h2 className="card__header--title">{position}</h2>
                <div className="card__header--sub">{company}</div>
                <span className="job__city">{city.replace("_", " ")}</span>
            </div>
            <div className="card__body">
                <div className="job__info">
                    <div className={"job__icon " + category}
                        style={{ backgroundImage: `url(${icons})` }}>
                        <a href={link} title={position}><i></i></a>
                    </div>
                    <div>
                        <a className="job__button job__button-shareButton" href="#link">Compartir</a>
                        <a className="job__button" href={link}>Aplicar</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default JobList;
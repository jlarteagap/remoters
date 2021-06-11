import React from 'react' 

const Job = ({job}) => {
    const {company, position, city, link, category, remote} = job
    return(
        <div className="card card--job">
            <div className="card__img">
                {/* <img src={DEFAULT_IMAGES} alt="DEFAUL IMAGES" /> */}
            </div>
            <div className="card__header">
                <h2 className="card__header--title"><a href={link} target="_blank" rel="noreferrer">{position}</a></h2>
                <div className="card__header--sub">{company}</div>
                <span className="job__city">{city.replace("_", " ")}</span>
            </div>
            <div className="card__body">
                <div className="job__info">
                    <div className="icons-info">
                        {/* {iconRemote}
                        <JobIcon category = {category} /> */}
                    </div>
                    <div className="job__button-position">
                        <a className="job__button job__button-shareButton" href="#link" >Compartir</a>
                        <a className="job__button" href={link} target="_blank" rel="noreferrer">Aplicar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job
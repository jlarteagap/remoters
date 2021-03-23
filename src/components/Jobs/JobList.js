import React from 'react'
import icons from '../../img/icons.png'

const JobList = (props) => {
    const {id, company, position, city, link, category, remote} = props.job
    
    let iconRemote
    if(remote){
        iconRemote = <div className="job__icon REMOTE" style={{ backgroundImage: `url(${icons})` }}><a href={link} title="Trabajo Remoto"><i></i></a></div>
    }

    return (
        <div className="card" key={id}>
            <div className="card__header">
                <h2 className="card__header--title">{position}</h2>
                <div className="card__header--sub">{company}</div>
                <span className="job__city">{city.replace("_", " ")}</span>
            </div>
            <div className="card__body">
                <div className="job__info">
                    <div className="job__icons">
                        {iconRemote}
                        <span className={"job__icon " + category}
                            style={{ backgroundImage: `url(${icons})` }}>
                            <a href={link} title={position}><i></i></a>
                        </span>
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
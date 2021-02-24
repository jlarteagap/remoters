import { Component } from 'react'
import { Query } from 'react-apollo'
import { JOBS_QUERY } from '../../query'
import icons from '../../img/icons.png'
import './Jobs.css'

class Jobs extends Component {
    render(){
        return(
            <Query query = { JOBS_QUERY }>
                {({ loading, error, data}) =>{
                    if(loading) return "cargando...";
                    if(error) return `Error ${error.message}`
                    
                    
                    return(
                        <div className="container">
                            <div className="content">
                                {data.getJobs.map(job => {
                                    return(
                                        <div className="card" key = {job.id}>
                                            <div className="card__header">
                                                <h2 className="card__header--title">{job.jobtitle}</h2>
                                                <div className="card__header--sub">{job.company}</div>
                                                <span className="job__city">{job.city.replace("_", " ")}</span>
                                            </div>
                                            <div className="card__body">
                                                <div className="job__info">
                                                    <div className={"job__icon " + job.category} 
                                                        style={{backgroundImage: `url(${icons})`}}>
                                                        <a href={job.link} title={job.jobtitle}><i></i></a>
                                                    </div>
                                                    <div>
                                                        <a className="job__button job__button-shareButton" href="#link">Compartir</a>
                                                        <a className="job__button" href={job.link}>Aplicar</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                })}
                            </div>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default Jobs
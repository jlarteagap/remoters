import { Component } from 'react'
import { Query } from 'react-apollo'
import { JOBS_QUERY } from '../../query'
import './Jobs.css'
import JobList from './JobList'

class Jobs extends Component {
    render(){
        return(
            <Query query = { JOBS_QUERY } pollInterval = {1000}>
                {({ loading, error, data, startPolling, stopPolling}) =>{
                    if(loading) return "cargando...";
                    if(error) return `Error ${error.message}`
                    
                    
                    return(
                        <div className="container">
                            <div className="content">
                                {data.getJobs.map(job => {
                                    return(
                                        <JobList
                                            key = {job.id}
                                            job = {job}
                                        />
                                        ) 
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
import { Component } from 'react'
import { Query } from 'react-apollo'
import { JOBS_QUERY } from '../../query'


class Jobs extends Component {
    render(){
        return(
            <Query query = { JOBS_QUERY }>
                {({ loading, error, data}) =>{
                    if(loading) return "cargando...";
                    if(error) return `Error ${error.message}`
                    
                    
                    return(
                        <div>
                            {data.getJobs.map(job => {
                                console.log(job)
                                return(
                                    <li key = {job.id}>{job.jobtitle}</li>)
                            })}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default Jobs
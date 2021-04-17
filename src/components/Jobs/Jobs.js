import { Fragment } from 'react'
import { Query } from 'react-apollo'
import { JOBS_QUERY } from '../../query'
import './Jobs.css'
import JobList from './JobList'
import Sidebar from '../Sidebar/Sidebar'
import Paginator from '../utils/Paginator'

const Jobs = (props) => {
        return (
            <Fragment>
                <div className="content">
                    <Query 
                        query={JOBS_QUERY} 
                        pollInterval={1000} 
                        variables = {{ limit: props.page.limit, offset: props.page.offset }}
                        >
                            
                        {({ loading, error, data, startPolling, stopPolling }) => {
                            if (loading) return "cargando...";
                            if (error) return `Error ${error.message}`
                            
                            return (                                
                                <div>
                                    {data.getJobs.map(job => {
                                        return (
                                            <JobList
                                                key={job.id}
                                                job={job}
                                            />
                                        )
                                    })
                                    }
                                    <Paginator
                                        actual = {props.page.actual}
                                        total = {data.totalJobs}
                                        limit = {props.page.limit}
                                        prevPage = {props.prevPage}
                                        nextPage = {props.nextPage}
                                    />
                                </div>
                            )
                        }}
                    </Query>
                    
                </div>
                <Sidebar reset = {props.reset} />
            </Fragment>
        )
    }

export default Jobs
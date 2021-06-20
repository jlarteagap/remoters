import React, { Fragment } from 'react'
import './Jobs.css'
import Job from './Job'
import { useQuery } from "@apollo/client"
import { GET_JOBS } from '../../Graphql/Query'

import Sidebar from '../sidebar/Sidebar'
import Paginator from '../utils/Paginator'
import Loading from '../utils/Loading'

const JobsList = (props) => {
    const { loading, error, data } = useQuery(GET_JOBS, {
        pollInterval: 3000,
        variables: {
            limit: props.page.limit,
            offset: props.page.offset
        }
    })
    if(loading) return <Loading />
    if(error) return "Error: "
    return(
        <Fragment>
            <div className="content">
                {data.getJobs.map(job => {
                    return(
                            <Job
                                key={job.id}
                                job={job}
                            />
                    )
                })}

                <Paginator
                    actual = {props.page.actual}
                    total = {data.totalJobs}
                    limit = {props.page.limit}
                    prevPage = {props.prevPage}
                    nextPage = {props.nextPage}
                />
            </div>
            <Sidebar reset = {props.reset} />
        </Fragment>
    )
}

export default JobsList
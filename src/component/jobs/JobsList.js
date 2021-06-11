import React from 'react'
import './Jobs.css'
import Job from './Job'
import { useQuery } from "@apollo/client"
import { GET_JOBS } from '../../queries'

const JobsList = () => {
    const { loading, error, data } = useQuery(GET_JOBS)
    if(loading) return "Loading"
    if(error) return "Error: "

    return(
        <div>
            {data.getJobs.map(job => {
                return(
                    <Job
                        key={job.id}
                        job={job}
                    />
                )
            })}
        </div>
    )
}

export default JobsList
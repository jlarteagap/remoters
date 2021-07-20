import React, { Fragment, useContext } from 'react'
import './Jobs.css'
import Job from './Job'
import { useQuery } from "@apollo/client"
import { GET_JOBS } from '../../Graphql/Query'

import Sidebar from '../sidebar/Sidebar'
import Paginator from '../utils/Paginator'
import Loading from '../utils/Loading'

import AppContext from '../../context/AppContext'

const JobsList = () => {
    const { resetState, nextPage, prevPage, page } = useContext(AppContext)
    const { loading, error, data } = useQuery(GET_JOBS, {
        pollInterval: 3000,
        variables: {
            limit: page.limit,
            offset: page.offset
        }
    })
    if(loading) return <Loading />
    if(error) return "Error: No se pude conectar con el servidor"
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
                    actual = {page.actual}
                    total = {data.totalJobs}
                    limit = {page.limit}
                    prevPage = {prevPage}
                    nextPage = {nextPage}
                />
            </div>
            <Sidebar reset = {resetState} />
        </Fragment>
    )
}

export default JobsList
import React, { Fragment, useContext} from 'react'
import { useQuery } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import { GET_JOBS } from '../../Graphql/Query'

import './Jobs.css'

import Sidebar from '../sidebar/Sidebar'
import Job from './Job'
import Paginator from '../utils/Paginator'
import Loading from '../utils/Loading'
import AppContext from '../../context/AppContext'


const Categories = (props) => {
    const category = props.match.params.category
    const { resetState, nextPage, prevPage, page } = useContext(AppContext)
    const {loading, error, data} = useQuery(GET_JOBS, {
        pollInterval: 5000,
        variables: {
            category,
            limit: page.limit,
            offset: page.offset
        }
    })
    if(loading) return <Loading />
    if(error) return `Error: ${error.message}`
    return(
        <Fragment>
            <div className="content">
                {data.getJobs.map(job => {
                    return(
                        <Job
                            key={job.id}
                            job={job} />
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
export default withRouter(Categories)
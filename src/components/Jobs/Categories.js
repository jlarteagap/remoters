import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { GET_CATEGORIES } from '../../query'
import { withRouter } from 'react-router-dom'

import './Jobs.css'

import Sidebar from '../Sidebar/Sidebar'
import JobList from './JobList'
import Paginator from '../utils/Paginator'
import Loading from '../utils/Loading'


const Categories = (props) => {

    const category = props.match.params.category

    return (
        <Fragment>

            <Query
                query={GET_CATEGORIES}
                pollInterval={5000} 
                variables={{ category, limit: props.page.limit, offset: props.page.offset }}>

                {({ loading, error, data, startPolling, stopPolling }) => {
                    
                    if (loading) return <Loading />;
                    if (error) return `Error ${error.message}`

                    return (
                        <div className="content">
                            {data.byCategories.map(job => {
                                return (

                                    <JobList
                                        key={job.id}
                                        job={job}
                                    />

                                )
                            })}
                            {/* ADD ASC List */}

                            <Paginator
                                actual={props.page.actual}
                                total = {data.totalCategories}
                                limit={props.page.limit}
                                prevPage={props.prevPage}
                                nextPage={props.nextPage}
                            />
                        </div>
                    )
                }}
            </Query>
            <Sidebar reset = {props.reset} />
        </Fragment>
    )
}
export default withRouter(Categories)
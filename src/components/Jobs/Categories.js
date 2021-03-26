import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { GET_CATEGORIES } from '../../query'
import { withRouter } from 'react-router-dom'

import './Jobs.css'

import Sidebar from '../Sidebar/Sidebar'
import JobList from './JobList'
import Paginator from '../General/Paginator'


const Categories = (props) => {

    const category = props.match.params.category

    return (
        <Fragment>

            <Query
                query={GET_CATEGORIES}
                
                variables={{ category, limit: props.limit, offset: props.page.offset }}>
                
                {({ loading, error, data, startPolling, stopPolling }) => {
                    
                    if (loading) return "cargando...";
                    if (error) return `Error ${error.message}`
                    const total = data.byCategories.length

                    return (
                        <div className="content">
                            {data.byCategories.map(job => {
                                return (

                                    <JobList
                                        key={job.id}
                                        job={job}
                                    />

                                )
                            }).reverse()}
                            {/* ADD ASC List */}

                            <Paginator
                                actual={props.page.actual}
                                total = {total.toString()}
                                limit={props.limit}
                                prevPage={props.prevPage}
                                nextPage={props.nextPage}
                            />
                        </div>
                    )
                }}
            </Query>
            <Sidebar />
        </Fragment>
    )
}
export default withRouter(Categories)
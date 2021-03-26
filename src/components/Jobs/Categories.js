import React, { Fragment } from 'react'

import { GET_CATEGORIES } from '../../query'
import './Jobs.css'
import JobList from './JobList'
import Sidebar from '../Sidebar/Sidebar'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'


const Categories = (props) => {

    const category = props.match.params.category

    return (
        <Fragment>

            <Query query={GET_CATEGORIES} variables={{ category }}>

                {({ loading, error, data, startPolling, stopPolling }) => {
                    if (loading) return "cargando...";
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
                            }).reverse()}
                            {/* ADD ASC List */}
                        </div>
                    )
                }}
            </Query>
            <Sidebar />
        </Fragment>
    )
}
export default withRouter(Categories)
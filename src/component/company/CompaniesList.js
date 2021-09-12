import React, {Fragment, useContext } from 'react'
import { useQuery } from '@apollo/client';
import { GET_COMPANIES } from '../../Graphql/Query';

import Company from './Company'
import AppContext from '../../context/AppContext';
import Paginator from '../utils/Paginator';
import Loading from '../utils/Loading';
import Job from '../jobs/Job';
const CompaniesList = () => {
    const { nextPage, prevPage, page } = useContext(AppContext)
    const {loading, error, data} = useQuery(GET_COMPANIES, {
        pollInterval: 3000,
        variables: {
            limit: page.limit,
            offset: page.offset
        }
    })

    if(loading) return <Loading />
    if(error) return `Error: ${error.message}`

    return(
        <Fragment>
            <div className="content">
                {data.allCompanies.map(company => {
                    return(
                        <Company
                            key = {company.id}
                            company = {company}
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
        </Fragment>
    )
}

export default CompaniesList;
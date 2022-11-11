import React, { Fragment, useContext } from 'react'
import Job from './Job'
import NO_POST from '@public/image/posting.svg'
import { useQuery } from '@apollo/client'

import Paginator from '@utils/Paginator'
import Loading from '@utils/Loading'

import AppContext from '@context/AppContext'
import { GetJobsDocument } from '@service/graphql/graphql'
const JobsList = () => {
  const { nextPage, prevPage, page } = useContext(AppContext)
  const { loading, error, data } = useQuery(GetJobsDocument)
  console.log(data)

  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`
  console.log(page)
  return (
    <Fragment>
      <div className="content">
        {data.getJobs.length < 1 ? (
          <div className="is-flex is-justify-content-center is-align-items-center">
            <div>
              <h3>Oops! no hemos encontrado ninguna publicacion</h3>
              <center>
                <img src={NO_POST} alt="No hay post" width="350px" />
              </center>
            </div>
          </div>
        ) : (
          ''
        )}
        {data.getJobs.map((job, index) => {
          return <Job key={index} job={job} />
        })}

        <Paginator
          actual={page.actual}
          total={data.totalJobs}
          limit={page.limit}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </Fragment>
  )
}

export default JobsList

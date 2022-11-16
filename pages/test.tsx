import React from 'react'
import { gql } from '@apollo/client'
import client from '../src/hoc/apollo-client'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { GetJobsQuery } from '../service/graphql/graphql'

export const getStaticProps: GetStaticProps<{
  jobs: GetJobsQuery[]
}> = async () => {
  try {
    const res = await client.query({
      query: gql`
        query getJobs {
          getJobs {
            slug
          }
        }
      `
    })
    if (res.data == null) {
      throw new Error('Error Failed to request')
    }

    const jobs = res.data.getJobs
    return {
      props: {
        jobs
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        jobs: []
      }
    }
  }
}

const TestPage = ({ jobs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(jobs)
  return (
    <div>
      {jobs.map(job => {
        return <li key={job.slug}>{job.slug}</li>
      })}
      {/* {data &&
        data.getJobs.map(item => {
          return <li key={item.slug}>{item.slug}</li>
        })} */}
    </div>
  )
}

export default TestPage

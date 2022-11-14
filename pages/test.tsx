import React from 'react'
import { gql } from '@apollo/client'
import client from '../src/hoc/apollo-client'

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getJobs {
        getJobs {
          slug
        }
      }
    `
  })

  return {
    props: {
      data
    }
  }
}

export default function TestPage({ data }) {
  return (
    <div>
      {data &&
        data.getJobs.map(item => {
          return <li key={item.slug}>{item.slug}</li>
        })}
    </div>
  )
}

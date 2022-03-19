import { gql } from '@apollo/client'

export const GET_JOBS = gql`
  query getJobs(
    $username: String
    $category: String
    $limit: Int
    $offset: Int
  ) {
    getJobs(
      username: $username
      category: $category
      limit: $limit
      offset: $offset
    ) {
      id
      category
      city
      company {
        name
        logo
      }
      country
      link
      money
      position
      remote
      salary
      type
      updateAt
      username {
        email
      }
    }
    totalJobs
  }
`

export const GET_JOB = gql`
  query getJob($id: ID) {
    getJob(ID: $id) {
      id
      category
      city
      company {
        name
        logo
      }
      country
      link
      money
      position
      remote
      salary
      type
      updateAt
      username {
        email
      }
    }
  }
`

export const GET_COMPANIES = gql`
  query allCompanies($username: String, $limit: Int, $offset: Int) {
    allCompanies(username: $username, limit: $limit, offset: $offset) {
      id
      activity
      createdAt
      description
      logo
      name
      phone
      site
      username
    }
  }
`

export const GET_COMPANY = gql`
  query getCompany($id: ID) {
    getCompany(ID: $id) {
      id
      activity
      createdAt
      description
      logo
      name
      phone
      site
      username
    }
  }
`

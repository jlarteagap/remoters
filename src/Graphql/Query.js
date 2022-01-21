import { gql } from '@apollo/client'

export const GET_JOBS = gql`
  query getJobs($category: String, $limit: Int, $offset: Int) {
    getJobs(category: $category, limit: $limit, offset: $offset) {
      id
      position
      category
      link
      city
      country
      remote
      company {
        name
        logo
      }
      createdAt
      username {
        email
      }
      type
      salary
    }
    totalJobs
  }
`

export const GET_COMPANIES = gql`
  query allCompanies($username: String, $limit: Int, $offset: Int) {
    allCompanies(username: $username, limit: $limit, offset: $offset) {
      id
      name
      site
      description
      logo
      createdAt
      username
    }
  }
`

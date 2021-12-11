import { gql } from '@apollo/client'

export const GET_JOBS = gql`
  query {
    getJobs {
      id
      position
      category
      city
      country
      link
      remote
      company {
        name
        logo
      }
      createdAt
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
      name
      site
      description
      logo
      createdAt
      username
    }
  }
`

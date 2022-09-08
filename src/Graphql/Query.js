import { gql } from '@apollo/client'

export const GET_JOBS = gql`
  query getJobs(
    $username: String
    $category: String
    $limit: Int
    $offset: Int
    $active: Boolean
  ) {
    getJobs(
      username: $username
      category: $category
      limit: $limit
      offset: $offset
      active: $active
    ) {
      id
      active
      category
      company {
        name
      }
      link
      remote
      slug
      content {
        currency
        description
        salary
        tags
        title
        contract
      }
      location {
        country {
          name
        }
        city {
          name
        }
      }
      createdAt
      deletedAt
      city
      companySimple
      type
      salary
      position
      money
      country
    }
    totalJobs
  }
`

export const GET_JOB = gql`
  query getJob($id: ID) {
    getJob(ID: $id) {
      id
      active
      category
      company {
        name
      }
      link
      remote
      username {
        email
      }
      slug
      content {
        currency
        description
        salary
        title
        contract
      }
      location {
        country {
          name
        }
        city {
          name
        }
      }
      city
      companySimple
      country
      money
      position
      salary
      type
      updatedAt
      deletedAt
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
      activity
      phone
      username
    }
  }
`

export const GET_COMPANY = gql`
  query getCompany($id: ID) {
    getCompany(ID: $id) {
      id
      name
      site
      description
      logo
      createdAt
      activity
      phone
      username
    }
  }
`
export const GET_UBICATION = gql`
  query allUbication {
    allUbication {
      name
      value
      cities {
        name
        value
        slug
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  query allCategories {
    allCategories {
      name
      value
      slug
    }
  }
`

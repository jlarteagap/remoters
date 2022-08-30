import { gql } from '@apollo/client'

export const ADD_JOB = gql`
  mutation newJob($input: JobInput) {
    newJob(input: $input) {
      location {
        country {
          name
        }
        city {
          name
        }
      }
      active
      category
      company {
        name
      }
      remote
      username {
        email
      }
      slug
      link
      content {
        currency
        description
        salary
        title
        contract
      }
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      id
      name
      lastname
      email
      password
      role
      token
    }
  }
`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      lastname
      email
      password
      role
      token
    }
  }
`

export const CREATE_COMPANY = gql`
  mutation company($input: CompanyInput) {
    company(input: $input) {
      id
      name
      site
      description
      logo
      username
    }
  }
`
export const UPDATE_JOB = gql`
  mutation UpdateJob($input: JobInput) {
    updateJob(input: $input) {
      id
      active
      category
      # link
      # slug
      # company {
      #   name
      # }
      # ubication {
      #   name
      #   cities {
      #     name
      #     value
      #     slug
      #   }
      # }
      # content {
      #   title
      #   description
      #   currency
      #   salary
      #   contract
      # }
      # remote
      # username {
      #   email
      # }
    }
  }
`

export const DELETE_JOB = gql`
  mutation deleteJobs($jobId: ID) {
    deleteJobs(jobId: $jobId)
  }
`
export const DELETE_COMPANY = gql`
  mutation deleteCompany($companyId: ID) {
    deleteCompany(companyId: $companyId)
  }
`
export const UPDATE_COMPANY = gql`
  mutation UpdateCompany($input: CompanyInput) {
    updateCompany(input: $input) {
      id
      name
      site
      description
      logo
      createdAt
      updateAt
      username
      phone
      activity
    }
  }
`

export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`

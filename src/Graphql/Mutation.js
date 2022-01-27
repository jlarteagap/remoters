import { gql } from '@apollo/client'

export const ADD_JOB = gql`
  mutation newJob($input: JobInput) {
    newJob(input: $input) {
      id
      position
      category
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
      createdAt
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
      createdAt
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
      createdAt
      username
    }
  }
`
export const UPDATE_JOB = gql`
  mutation UpdateJob($input: JobInput) {
    updateJob(input: $input) {
      id
      position
      category
      link
      city
      country
      remote
      company {
        name
      }
      type
      salary
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

export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`

import { gql } from '@apollo/client'

export const ADD_JOB = gql`
  mutation newJob($input: JobInput) {
    newJob(input: $input) {
      id
      active
      category
      company {
        name
        logo
      }
      link
      money
      position
      remote
      salary
      type
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      id
      email
      lastname
      name
      password
      role
      token
      updateAt
    }
  }
`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      lastname
      name
      password
      role
      token
    }
  }
`

export const CREATE_COMPANY = gql`
  mutation company($input: CompanyInput) {
    company(input: $input) {
      description
      id
      logo
      name
      site
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
      city
      company {
        name
      }
      country
      link
      money
      position
      remote
      salary
      type
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
      activity
      createdAt
      description
      logo
      name
      phone
      site
      updateAt
      username
    }
  }
`

export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`

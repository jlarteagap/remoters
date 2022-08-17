import { gql } from '@apollo/client'

export const ADD_JOB = gql`
  mutation newJob($input: JobInput) {
    newJob(input: $input) {
      id
      active
      position
      category
      link
      remote
      companySimple
      type
      salary
      money
      city
      country
      ubication
      slug
      content
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
      position
      category
      link
      city
      country
      remote
      companySimple
      type
      salary
      money
      active
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

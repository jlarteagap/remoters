import { gql } from "@apollo/client";

export const ADD_JOB = gql`
mutation addjob ($input: JobInput){
    addJob(input: $input){
        company
        position
        category
        city
        link
        email
        remote
        startDate
    }
  }`

export const CREATE_USER_MUTATION = gql`
    mutation register($input: RegisterInput){
        register(input: $input){
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
    mutation login($email: String!, $password: String!){
        login(email:$email, password: $password){
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
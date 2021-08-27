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

export const AUTENTICATE_USER = gql`
    mutation autenticateUser(
        $email: String!, 
        $password: String!) {
        autenticateUser(
            email: $email,
            password: $password)
            {
                token
            }
    }

`
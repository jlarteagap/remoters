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
    mutation createUser(
            $email: String!, 
            $password: String!, 
            $name: String, 
            $lastname: String, 
            $company: String, 
            $role: String){
        createUser(
            email: $email, 
            password:$password, 
            name:$name, 
            lastname: $lastname, 
            company: $company, 
            role: $role)
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

export const CREATE_COMPANY = gql`
    mutation createCompany($input: CompanyInput){
        createCompany(input: $input){
            name
            site
            description
            logo
            user
        }
    }
`
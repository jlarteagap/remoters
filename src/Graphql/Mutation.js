import { gql } from "@apollo/client";

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
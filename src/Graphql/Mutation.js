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
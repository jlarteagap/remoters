import gql from 'graphql-tag'

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
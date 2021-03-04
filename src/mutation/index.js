import gql from 'graphql-tag'

export const ADD_JOB = gql`
mutation addjob ($input: JobInput){
    addJob(input: $input){
        company
        jobtitle
        category
        city
        country
        link
        email
        remote
        startDate
    }
  }`
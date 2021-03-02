import gql from 'graphql-tag'

export const JOBS_QUERY = gql`
    query getJobs {
            getJobs{
                jobtitle
                company
                city
                category
                link
                email
                remote
            }
        }
`
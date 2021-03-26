import gql from 'graphql-tag'

export const JOBS_QUERY = gql`
    query getJobs {
            getJobs{
                id
                position
                company
                city
                category
                link
                email
                remote
            }
        }
`

export const GET_CATEGORIES = gql`
    query byCategories($category: String){
        byCategories(category: $category){
            id
            position
            company
            city
            category
            link
            email
            remote
    },
}
`
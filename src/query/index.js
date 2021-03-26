import gql from 'graphql-tag'

export const JOBS_QUERY = gql`
    query getJobs($limit:Int, $offset:Int) {
            getJobs(limit: $limit, offset: $offset){
                id
                position
                company
                city
                category
                link
                email
                remote
            }
            totalJobs
        }
`

export const GET_CATEGORIES = gql`
    query byCategories($category: String, $limit:Int, $offset:Int){
        byCategories(category: $category, limit: $limit, offset: $offset){
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
import { gql } from "@apollo/client";

export const GET_JOBS = gql`
    query getJobs($limit:Int, $offset:Int){
        getJobs(limit: $limit, offset:$offset){
          id
          company
          position
          city
          link
          category
          remote
        }
        totalJobs
      }
`;

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
    totalCategories(category: $category)
}
`

export const USER_ACTUAL = gql`
  query getUser{
    getUser{
      email
    }
}
`
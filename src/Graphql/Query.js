import { gql } from "@apollo/client";

export const GET_JOBS = gql`
    query getJobs($category: String, $limit:Int, $offset:Int){
        getJobs(category: $category, limit: $limit, offset:$offset){
          id
          position
          category
          city
          country
          link
          remote
          company{
            name
          }
          startDate
        }
        totalJobs
      }
`;

export const GET_COMPANIES = gql`
  query allCompanies($user: String, $limit:Int, $offset:Int){
    allCompanies(user: $user, limit: $limit, offset: $offset){
      id
      name
      site
      description
      logo
      createdAt
      user{
        email
      }
    }
  }
`
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
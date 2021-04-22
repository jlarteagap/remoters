
import ApolloClient, { InMemoryCache } from 'apollo-boost';



export const client = new ApolloClient({
  // uri: "http://localhost:4000/graphql",
  uri: "https://server-tembiapo.herokuapp.com/",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphQLErrors}) =>{
    console.log('graphQLError', graphQLErrors);
    console.log('networkError', networkError)
  }
})

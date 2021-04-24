import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const client = new ApolloClient({
  uri: "https://server-tembiapo.herokuapp.com/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphQLErrors}) =>{
    console.log('graphQLError', graphQLErrors);
    console.log('networkError', networkError)
  }
})

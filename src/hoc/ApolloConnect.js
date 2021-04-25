import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const client = new ApolloClient({
  uri: "http://localhost/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphQLErrors}) =>{
    console.log('graphQLError', graphQLErrors);
    console.log('networkError', networkError)
  }
})
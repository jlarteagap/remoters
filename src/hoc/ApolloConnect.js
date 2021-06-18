import { ApolloClient, InMemoryCache, from, createHttpLink, HttpLink} from "@apollo/client";
// import { setContext } from "apollo-link-context";
import { onError} from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context';

const errorLink = onError(({graphqlErrors, nerworkError}) => {
    if(graphqlErrors){
        graphqlErrors.map(({message, location, path}) => {
            alert(`GraphQL error ${message}`)
        })
    }
})

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });
  
const authLink = setContext((_, { headers })=> {
    const token = localStorage.getItem('token')

    return {
        headers: {
            ...headers, 
            authorization: token ? token : ''
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink, errorLink),
    cache: new InMemoryCache(),
  });
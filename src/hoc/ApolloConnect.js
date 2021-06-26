import { ApolloClient, InMemoryCache, createHttpLink, HttpLink} from "@apollo/client";
import { onError} from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context';
import { addTypenameToDocument } from "@apollo/client/utilities";

const errorLink = onError(({graphqlErrors, networkError}) => {
    if(graphqlErrors){
        graphqlErrors.map(({message, location, path}) => {
            alert(`GraphQL error ${message}`)
        })
    }
})

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetchOptions: {
        credentials: 'include'
    }
  });
  
const authLink = setContext((_, { headers })=> {
    const token = localStorage.getItem('token')

    return {
        headers: {
            ...headers, 
            authorization: token ? token : ""
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        addTypename: false
    }
    ),
  });

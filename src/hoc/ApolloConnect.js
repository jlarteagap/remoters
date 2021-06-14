import { ApolloClient, InMemoryCache, from, HttpLink} from "@apollo/client";
import { onError} from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors, nerworkError}) => {
    if(graphqlErrors){
        graphqlErrors.map(({message, location, path}) => {
            alert(`GraphQL error ${message}`)
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:4000/graphql"})
])

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});
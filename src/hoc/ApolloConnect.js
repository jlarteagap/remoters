import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return console.log(`GraphQL error ${message}`)
    })
  }
})

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SERVER,
  fetchOptions: {
    credentials: 'include'
  }
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false
  })
})

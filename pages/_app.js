/* eslint-disable react/prop-types */
// import App from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '../src/hoc/ApolloConnect'
import { usePagination } from '../src/hooks/usePagination'
// import { AuthProvider } from '../src/context/auth'

import 'bulma/css/bulma.min.css'
import '../public/css/stl.css'
import '../public/css/fonts.css'
import AppContext from '../src/context/AppContext'
import Layout from '../src/component/layout/Layout'
import { AuthProvider } from '../src/context/auth'

function MyApp({ Component, pageProps }) {
  const pagination = usePagination()

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppContext.Provider value={pagination}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp

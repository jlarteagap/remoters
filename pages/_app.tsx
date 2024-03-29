/* eslint-disable react/prop-types */
// import App from 'next/app'
import React, { createContext } from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '../src/hoc/ApolloConnect'
import { usePagination } from '../src/hooks/usePagination'
import Script from 'next/script'

import 'bulma/css/bulma.min.css'
import '../public/css/stl.css'
import '../public/css/fonts.css'
import AppContext from '../src/context/AppContext'
import Layout from '../src/component/layout/Layout'
import { AuthProvider } from '../src/context/auth'
interface ContextType {
  nextPage: () => void
  prevPage: () => void
  resetState: () => void
  page: {
    limit: number
    offset: number
    actual: number
  }
}

export const AppContextValidate = createContext<ContextType>({
  nextPage: () => {},
  prevPage: () => {},
  resetState: () => {},
  page: {
    limit: 0,
    offset: 0,
    actual: 0
  }
})
function MyApp({ Component, pageProps }) {
  const pagination = usePagination()

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <AppContext.Provider
          value={{
            nextPage: pagination.nextPage,
            prevPage: pagination.prevPage,
            resetState: pagination.resetState,
            page: pagination.page
          }}
        >
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=G-Y25HYFFS1F`}
          />

          <Script strategy="lazyOnload">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y25HYFFS1F', {
        page_path: window.location.pathname,
        });
    `}
          </Script>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default MyApp

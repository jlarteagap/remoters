/* eslint-disable react/prop-types */
// import App from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '../src/hoc/ApolloConnect'
import { usePagination } from '../src/hooks/usePagination'

import 'bulma/css/bulma.min.css'
import '../public/css/stl.css'
import '../public/css/fonts.css'
import AppContext from '../src/context/AppContext'
import Layout from '../src/component/layout/Layout'
import { AuthProvider } from '../src/context/auth'

function MyApp({ Component, pageProps }) {
  const pagination = usePagination()

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <AppContext.Provider value={pagination}>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-MFRR780GVL`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MFRR780GVL', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default MyApp

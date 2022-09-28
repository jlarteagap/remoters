/* eslint-disable react/prop-types */
// import App from 'next/app'
import React from 'react'
import 'bulma/css/bulma.min.css'
import '../public/css/stl.css'
import '../public/css/fonts.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bulma/css/bulma.min.css'
import './assets/css/stl.css'

import { ApolloProvider } from '@apollo/client'

import { client } from './hoc/ApolloConnect'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

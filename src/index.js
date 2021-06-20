import React from 'react';
import ReactDOM from 'react-dom';
import { RootSession } from './App';
import { ApolloProvider } from "@apollo/client";

import { client } from './hoc/ApolloConnect'


ReactDOM.render(
    <ApolloProvider client={client}>
      <RootSession />
    </ApolloProvider>,
  document.getElementById('root')
);

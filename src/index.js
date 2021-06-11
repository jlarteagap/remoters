import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import JobsList from './component/jobs/JobsList';

import { client } from './hoc/ApolloConnect'

ReactDOM.render(
    <ApolloProvider client={client}>
      <JobsList />
    </ApolloProvider>,
  document.getElementById('root')
);
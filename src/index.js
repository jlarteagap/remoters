import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {client} from './hoc/ApolloConnect'
import { ApolloProvider } from 'react-apollo'; 

ReactDOM.render(
  <ApolloProvider client = {client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);



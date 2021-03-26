import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

// import Agregar from "./components/Add/Agregar";
import Jobs from "./components/Jobs/Jobs";
import NuevoTrabajo from "./components/Add/NuevoTrabajo";
import Categories from "./components/Jobs/Categories"

import './Style.css'

const App = () => {

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache({
      addTypename: false
    }),
    onError: ({ networkError, graphQLErrors}) =>{
      console.log('graphQLError', graphQLErrors);
      console.log('networkError', networkError)
    }
  })

  return(
    <ApolloProvider client = {client}>
        <Router>
          <Header />
          <main className="main">
            <div className="container add">
              <Switch>
                <Route exact path="/"><Jobs /></Route>
                <Route exact path="/agregar"><NuevoTrabajo /> </Route>
                <Route exact path="/:category"><Categories /></Route>
              </Switch>
            </div>
          </main>
        </Router>
      
    </ApolloProvider>
  )
}

export default App;

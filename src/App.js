import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

// import Agregar from "./components/Add/Agregar";
import Jobs from "./components/Jobs/Jobs";
import NuevoTrabajo from "./components/Add/NuevoTrabajo";
import Categories from "./components/Jobs/Categories"


import './Style.css'

const App = () => {
  const limit = 5
  const [page, setPage] = useState({
      offset: 0,
      actual: 1
  })

  const nextPage = () => {
    setPage({
      offset: page.offset + limit,
      actual: page.actual + 1
    })
  }
  const prevPage = () => {
      setPage({
        offset: page.offset - limit,
        actual: page.actual - 1
      })
  }

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
                <Route exact path="/">
                  <Jobs 
                    limit = {limit} 
                    nextPage = {nextPage} 
                    prevPage={prevPage} 
                    page = {page}/>
                  </Route>
                <Route exact path="/agregar">
                  <NuevoTrabajo />
                </Route>
                <Route exact path="/:category">
                  <Categories 
                  limit = {limit} 
                  nextPage = {nextPage} 
                  prevPage={prevPage} 
                  page = {page}/>
                </Route>
              </Switch>
            </div>
          </main>
          <Footer />
        </Router>
      
    </ApolloProvider>
  )
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from './component/layout/Layout'
import { usePagination } from './hooks/usePagination' 

import Home from './containers/Home'
import RegisterView from './containers/RegisterView';
import LoginView from './containers/LoginView';

import Session from './hoc/Session'
// import NewJob from './container/NewJob';
// import CategoriesList from "./container/CategoriesList"


import './assets/css/style.css'

const App = ({refetch, session}) => {
  const { nextPage, prevPage, resetState, page} = usePagination()
  console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ session", session)
  
  return (
    <Router>
      <Layout reset = {resetState}>
        <main className="main">
          <div className="container add">
            <Switch>
              <Route exact path="/">
                <Home
                  nextPage={nextPage}
                  prevPage={prevPage}
                  page={page}
                  reset={resetState} />
              </Route>
              <Route exact path="/registro">
                <RegisterView />
              </Route>
              <Route exact path="/login" render={() => <LoginView refetch={refetch} /> } />
              {/* <Route exact path="/agregar">
                <NewJob />
              </Route> */}
              {/* <Route exact path="/:category">
                <CategoriesList
                  nextPage={nextPage}
                  prevPage={prevPage}
                  page={page}
                  reset={resetState}
                />
              </Route> */}
            </Switch>
          </div>
        </main>
      </Layout>
    </Router>
  )
}

const RootSession = Session(App)

export { RootSession }
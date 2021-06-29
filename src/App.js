import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from './component/layout/Layout'
import AppContext from './context/AppContext'
import { usePagination } from './hooks/usePagination' 

import Home from './containers/Home'
import RegisterView from './containers/RegisterView';
import LoginView from './containers/LoginView';

import Session from './hoc/Session'
// import NewJob from './container/NewJob';
// import CategoriesList from "./container/CategoriesList"


import './assets/css/stl.css'

const App = ({refetch, session}) => {
  const pagination = usePagination()
<<<<<<< HEAD
=======
<<<<<<< HEAD

  console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ session", session)
=======
>>>>>>> useContext
>>>>>>> fb96be5d8a069720cbf90fb0b51c5be36f639924
  
  return (
    <AppContext.Provider value={pagination}>
      <Router>
        <Layout>
          <main className="main">
            <div className="container add">
              <Switch>
                <Route exact path="/">
                  <Home />
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
    </AppContext.Provider>
    )
}

const RootSession = Session(App)

export { RootSession }
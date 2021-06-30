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
import Dashboard from './component/dashboard/Dashboard';
import Profile from './component/profile/Profile';
import Company from './component/company/Company'

const App = ({refetch, session}) => {
  const pagination = usePagination()
  
  return (
    <AppContext.Provider value={pagination}>
      <Router>
        <Layout>
          <main className="main">
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/registro">
                  <RegisterView />
                </Route>
                <Route exact path="/login" render={() => <LoginView refetch={refetch} /> } />
                <Route exact path="/panel"><Dashboard /></Route>
                <Route exact path="/profile"><Profile /></Route>
                <Route exact path="/empresas"><Company /></Route>
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

        <Switch>
        
        </Switch>
      </Router>
    </AppContext.Provider>
    )
}

const RootSession = Session(App)

export { RootSession }
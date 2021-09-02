import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from './component/layout/Layout'
import AppContext from './context/AppContext'
import {AuthRoute, PrivateRoute} from './utils/AuthRoute'
import { usePagination } from './hooks/usePagination' 
import { AuthProvider } from './context/auth'
import Home from './containers/Home'
import RegisterView from './containers/RegisterView';
import LoginView from './containers/LoginView';

import NewJob from './containers/NewJob';
// import CategoriesList from "./container/CategoriesList"

import './assets/css/stl.css'

const App = () => {
  const pagination = usePagination()

  return (
    <AuthProvider>
      <AppContext.Provider value={pagination}>
      <Router>
        <Layout>
          <main className="main">
            <div className="container add">
              <Switch>
                <AuthRoute exact path="/" component={Home} />
                <AuthRoute exact path="/registro" restricted component={RegisterView} />
                <AuthRoute exact path="/login" restricted component={LoginView} />
                <PrivateRoute exact path="/agregar" component={NewJob} />
              </Switch>
            </div>
          </main>
        </Layout>
      </Router>
    </AppContext.Provider>
    </AuthProvider>
  )
}

export default App;
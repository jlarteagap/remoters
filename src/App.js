import React, { useContext }from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from './component/layout/Layout'
import AppContext from './context/AppContext'
import AuthRoute from './utils/AuthRoute'
import { usePagination } from './hooks/usePagination' 
import { AuthProvider, AuthContext } from './context/auth'
import Home from './containers/Home'
import RegisterView from './containers/RegisterView';
import LoginView from './containers/LoginView';

import NewJob from './containers/NewJob';
// import CategoriesList from "./container/CategoriesList"

import './assets/css/stl.css'

const App = () => {
  const pagination = usePagination()
  const { user } = useContext(AuthContext)

  return (
    <AuthProvider>
      <AppContext.Provider value={pagination}>
      <Router>
        <Layout>
          <main className="main">
            <div className="container add">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <AuthRoute exact path="/registro" component={RegisterView} />
                <AuthRoute exact path="/login" component={LoginView} />
                {/* {user ? <Route path="/agregar" component={NewJob} /> : <Redirect to="/login" /> } */}
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
    </AuthProvider>
  )
}

export default App;
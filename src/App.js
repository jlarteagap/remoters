import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from './component/layout/Layout'
import AppContext from './context/AppContext'
import { AuthRoute, PrivateRoute } from './utils/AuthRoute'
import { usePagination } from './hooks/usePagination'
import { AuthProvider } from './context/auth'

import {
  Home,
  NewJob,
  CategoriesList,
  RegisterView,
  LoginView,
  Dashboard,
  EditJobsContainer,
  Companies,
  EditCompanies
} from './containers'

const App = () => {
  const pagination = usePagination()

  return (
    <AuthProvider>
      <AppContext.Provider value={pagination}>
        <Router>
          <Layout>
            <main className="main bg__main">
              <div className="container">
                <Switch>
                  <AuthRoute exact path="/" component={Home} />
                  <AuthRoute exact path="/agregar" component={NewJob} />

                  <AuthRoute
                    exact
                    path="/registro"
                    restricted
                    component={RegisterView}
                  />
                  <AuthRoute
                    exact
                    path="/login"
                    restricted
                    component={LoginView}
                  />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute
                    exact
                    path="/dashboard/agregar"
                    component={NewJob}
                  />
                  <PrivateRoute
                    exact
                    path="/dashboard/job/edit/:id"
                    component={EditJobsContainer}
                  />
                  <PrivateRoute
                    exact
                    path="/dashboard/empresas"
                    component={Companies}
                  />
                  <PrivateRoute
                    exact
                    path="/dashboard/empresas/edit/:id"
                    component={EditCompanies}
                  />
                  <AuthRoute
                    exact
                    path="/:category"
                    component={CategoriesList}
                  />
                </Switch>
              </div>
            </main>
          </Layout>

          <Switch></Switch>
        </Router>
      </AppContext.Provider>
    </AuthProvider>
  )
}

export default App

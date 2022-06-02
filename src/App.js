import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from './component/layout/Layout'
import AppContext from './context/AppContext'
import { AuthRoute } from './utils/AuthRoute'
import { usePagination } from './hooks/usePagination'
import { AuthProvider } from './context/auth'

import { Home, NewJob, CategoriesList } from './containers'

const App = () => {
  const pagination = usePagination()

  return (
    <AuthProvider>
      <AppContext.Provider value={pagination}>
        <Router>
          <Layout>
            <main className="main">
              <div className="container">
                <Switch>
                  <AuthRoute exact path="/" component={Home} />
                  <AuthRoute exact path="/agregar" component={NewJob} />
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

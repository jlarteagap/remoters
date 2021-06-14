import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from './component/layout/Layout'
import './assets/css/style.css'
import { usePagination } from './hooks/usePagination' 

import Home from './containers/Home'
import RegisterView from './containers/RegisterView';

const App = () => {
  const { nextPage, prevPage, resetState, page} = usePagination()
  
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
            </Switch>
          </div>
        </main>
      </Layout>
    </Router>
  )
}

export default App;

import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./container/Home"
import NewJob from './container/NewJob';

import CategoriesList from "./container/CategoriesList"

import './assets/css/Style.css'

import { usePagination } from './hooks/usePagination' 

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
              <Route exact path="/agregar">
                <NewJob />
              </Route>
              <Route exact path="/:category">
                <CategoriesList
                  nextPage={nextPage}
                  prevPage={prevPage}
                  page={page}
                  reset={resetState}
                />
              </Route>
            </Switch>
          </div>
        </main>
      </Layout>
    </Router>
  )
}

export default App;

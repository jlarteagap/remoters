import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Jobs from "./components/Jobs/Jobs";
import NuevoTrabajo from "./components/Add/NuevoTrabajo";
import Categories from "./components/Jobs/Categories"

import './Style.css'

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
                <Jobs
                  nextPage={nextPage}
                  prevPage={prevPage}
                  page={page}
                  reset={resetState} />

              </Route>
              <Route exact path="/agregar">
                <NuevoTrabajo />
              </Route>
              <Route exact path="/:category">
                <Categories
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

import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Agregar from "./components/Add/Agregar";

import './Style.css'

const App = () => {
  return(
    <main className="main">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/agregar"><Agregar /> </Route>
          <div>
            Main
          </div>
          <div>
            Sidebar
          </div>
        </Switch>
      </Router>
    </main>
  )
}

export default App;

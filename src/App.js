import { Component } from "react";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Agregar from "./components/Add/Agregar";
class App extends Component{
  render(){
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/agregar"><Agregar /> </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from './Paginas/principal';
import Curriculo from './Paginas/Curriculo';


export default function BasicExample() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/curriculo" component={Curriculo} />
        </Switch>
      
    </Router>
  );
}
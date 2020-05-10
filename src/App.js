import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import App from './Paginas/principal';
import Curriculo from './Paginas/Curriculo';
import Contato from "./Paginas/Contato";


export default function BasicExample() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/curriculo" component={Curriculo} />
          <Route path="/Contato" component={Contato} />
        </Switch>
      
    </Router>
  );
}
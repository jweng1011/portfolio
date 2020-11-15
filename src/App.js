import React from 'react';
import {Work} from "./work/Work";
import {Resume} from "./resume/Resume";
import {Fire} from "./caseStudies/fire/Fire.js";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Work} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/fire" component={Fire} />
      
    </Switch>
    </BrowserRouter> 
  );
}

export default App;

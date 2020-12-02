import React from 'react';
import {Work} from "./work/Work";
import {Resume} from "./resume/Resume";
import {Fire} from "./caseStudies/fire/Fire.js";
import { MassCOSH } from './caseStudies/masscosh/Masscosh';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Work} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/fire" component={Fire} />
      <Route exact path="/masscosh" component={MassCOSH} />
    </Switch>
    </BrowserRouter> 
  );
}

export default App;

import React from 'react';
import {Work} from "./work/Work";
import {Resume} from "./resume/Resume";
import {Fire} from "./caseStudies/fire/Fire.js";
import { MassCOSH } from './caseStudies/masscosh/Masscosh';
import {HashRouter, Switch, Route} from "react-router-dom";
import { SideProjects } from './sideProjects/SideProjects';

function App() {
  return (
    <HashRouter>
    <Switch>
      <Route exact path="/" component={Work} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/fire" component={Fire} />
      <Route exact path="/masscosh" component={MassCOSH} />
      <Route exact path="/sideProjects" component={SideProjects} />
    </Switch>
    </HashRouter> 
  );
}

export default App;

import React from 'react';
import {Work} from "./work/Work";
import {Resume} from "./resume/Resume";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Work} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
    </BrowserRouter> 
  );
}

export default App;

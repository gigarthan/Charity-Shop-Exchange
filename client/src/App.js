import React from "react";
import {Switch, Route} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>


  );
}

export default App;

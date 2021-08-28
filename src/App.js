import React, {useEffect, useState} from 'react';
import Home from './pages/home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
        <Router>
           <Switch>
           <Route path="/" exact>
            <Home />
           </Route>
           </Switch>
       </Router>
  </React.Fragment>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteList from './components/site/SiteList';

const App = () => (
  <Router>
    <Switch>
      <Route component={SiteList} path="/" exact />
    </Switch>
  </Router>

);

export default App;

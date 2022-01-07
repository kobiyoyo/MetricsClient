import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteList from './components/site/SiteList';
import 'antd/dist/antd.css';
import './styles/css/tailwind.css';

const App = () => (
  <Router>
    <Switch>
      <Route component={SiteList} path="/" exact />
    </Switch>
  </Router>

);

export default App;

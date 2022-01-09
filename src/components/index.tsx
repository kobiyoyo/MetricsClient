import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import SiteList from './site/SiteList';
import SiteDetail from './site/SiteDetail/index';

const AppPath = () => {
  const {
    Header, Content, Footer, Sider,
  } = Layout;
  return (
    <Router>
      <Content className="py-10 px-10">
        <Switch>
          <Route component={SiteList} path="/" exact />
          <Route component={SiteDetail} path="/sites/:id" exact />
        </Switch>
      </Content>
    </Router>
  );
};
export default AppPath;

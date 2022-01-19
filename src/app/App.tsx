import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AppPath from '../components';
import 'antd/dist/antd.css';
import '../styles/css/tailwind.css';

const App = () => (
  <Provider store={store}>
    <AppPath />
  </Provider>
);

export default App;

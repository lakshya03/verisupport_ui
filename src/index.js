import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
  ,
  document.getElementById('root')
);

/*
 * @author: 殷鹏飞
 * @Date: 2020-04-16 11:42:54
 * @information: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './style/common/public.scss'
import {Provider} from 'react-redux'
import store from './store/index.js'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { Router, hashHistory , browserHistory} from 'react-router' //hashHistory , browserHistory两者区别是后者不需要hash值
import { createStore , applyMiddleware} from 'redux';

import {rootReducer} from './reducers/index';

import thunk from 'redux-thunk';  //中间件

import routes from './router'

let store = createStore(rootReducer , applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);


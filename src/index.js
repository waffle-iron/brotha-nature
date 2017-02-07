import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './LoginPage';
import { Route, browserHistory } from 'react-router';
import ReactStormpath, { Router } from 'react-stormpath';

ReactStormpath.init({
  endpoints: {
    baseUri: null,
    login: '/login',
    logout: '/logout'
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    <Route path='/login' component={LoginPage}/>
  </Router>,
  document.getElementById('root')
);

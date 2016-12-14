import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home';
import Title from './components/Title';
import 'materialize-loader';

export default class App extends React.Component {
  render () {
    return (
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Home}/>
        <Route path="title" component={Title}/>
      </Route>
    </Router>
    );
  }
}
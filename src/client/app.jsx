import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home';

render(
  <Home />
, document.getElementById('root'));

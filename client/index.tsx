import * as React from "react";
import * as ReactDOM from "react-dom";
import { render } from 'react-dom'

import * as ReactRouter from "react-router";
import { Router, Route, hashHistory } from 'react-router'

import {WebtopApp} from "./containers/WebtopApp";

import {Hello} from "./components/Hello";

render((
  <Router history={hashHistory}>
    <Route path="/" component={WebtopApp}>
      <Route path="/hello" component={Hello}/>
      <Route path="/hello/:userName/:repoName" component={Hello}/>
    </Route>
  </Router>
), document.getElementById('root'));
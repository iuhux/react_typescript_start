import * as React from "react";
import {Component} from "react";
import * as ReactDOM from "react-dom";
import { render } from 'react-dom'

import {Provider} from 'react-redux';

import * as ReactRouter from "react-router";
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import configureStore from './store/configureStore';

import {WebtopApp} from "./containers/WebtopApp";

import SigninPage from './pages/SigninPage';

import {Hello} from "./components/Hello";
import {Repos} from "./components/Repos";
import {Repo} from "./components/Repo";
import {Home} from './components/Home'

declare var module: { hot: any };

/*export class Root extends Component<any, {}> {
    render() {
        return (
        <Provider store={this.props.store}>
            <Router history={hashHistory}>
                <Route path="/" component={WebtopApp}>
                    <IndexRoute component={Home}/>
                    <Route path="/hello" component={Hello}/>
                    <Route path="/hello/:userName/:repoName" component={Hello}/>
                    <Route path="/repos" component={Repos}>
                        <Route path="/repos/:userName/:repoName" component={Repo}/>
                    </Route>
                    <Route path="/signin" component={Repo} />
                    <Route path="/signout" component={Repo} />
                </Route>
            </Router>
        </Provider>
        )
    }
}*/
//解决警告信息
const routes =
        <Route path="/" component={WebtopApp}>
            <IndexRoute component={Home}/>
            <Route path="/hello" component={Hello}/>
            <Route path="/hello/:userName/:repoName" component={Hello}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/signin" component={SigninPage} />
            <Route path="/signout" component={Repo} />
        </Route>;
export class Root extends Component<any, {}> {
    render() {
        return (
        <Provider store={this.props.store}>
            <Router history={hashHistory} routes={routes}>
            </Router>
        </Provider>
        )
    }
}
//解决警告信息

export function run() {
  let initState = {};
  const store = configureStore(initState || {});
  let rootInstance = ReactDOM.render(<Root store={store} />, document.getElementById('root'));

  if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
      getRootInstances: function () {
        // Help React Hot Loader figure out the root component instances on the page:
        return [rootInstance];
      }
    });
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import TestForm from './components/testForm';
import ShowsIndex from './components/showsIndex';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello world!</h1>

        <Route exact path="/testform" component={TestForm} />
        <Route exact path="/shows" component={ShowsIndex} />
      </div>
    )
  }
}

//intialize store
let store = createStore(
  // ApiApp,
  applyMiddleware( thunk, logger )
);

ReactDOM.render(
  <Provider store = { store }>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)

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

// API request
import createShows from './util/shows';

// Components
import TestForm from './components/testForm';
import ShowsIndex from './components/showsIndex';
import ShowCreateForm from './components/ShowCreateForm';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello world!</h1>

        <Route exact path="/testform" component={TestForm} />
        <Route exact path="/shows" component={ShowsIndex} />
        <Route exact path="/createShow" component={ShowCreateForm} />
        <Route exact path="/shows/:id" />
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
      <App createShows={createShows}/>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)

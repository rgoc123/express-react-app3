import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import rootReducer from './reducers/rootReducer';
import { rootEpic } from './reducers/rootReducer';


// APIs

// Components
import TestForm from './components/testForm';
import ShowsIndex from './components/showsIndex';
import ShowFormContainer from './components/showFormContainer';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>The Shows!</h1>

        <Route exact path="/testform" component={TestForm} />
        <Route exact path="/shows" component={ShowsIndex} />
        <Route exact path="/createShow" component={ShowFormContainer} />
        <Route exact path="/shows/:id" component={ShowFormContainer} />
      </div>
    );
  }
}

//intialize store
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  // ApiApp,
  rootReducer,
  composeEnhancers(
    applyMiddleware( thunk, logger, epicMiddleware )
  )
);

function configureStore(store) {
  // epicMiddleware.run(rootEpic);

  return store;
}

window.getState = store.getState;

ReactDOM.render(
  <Provider store = { configureStore(store) }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)

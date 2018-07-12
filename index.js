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

import rootReducer from './reducers/rootReducer';

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
let store = createStore(
  // ApiApp,
  rootReducer,
  applyMiddleware( thunk, logger )
);

window.getState = store.getState;

ReactDOM.render(
  <Provider store = { store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)

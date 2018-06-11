import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello world!</h1>
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
    <App/>
  </Provider>,
  document.getElementById('app')
)

// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

// const store = createStore(shoppingListItemReducer);
const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// ReactDOM.render(<App />, document.getElementById('root'));
// To avoid passing store as a prop, we use the Provider component:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// we call our createStore() method in src/index.js. We pass our createStore() method a reducer, and then we pass our newly created store to our App component as a prop.

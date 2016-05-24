import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { TodoContainer } from './containers/TodoContainer';
import { todoReducer } from './redux/reducers.js';
import { Provider } from 'react-redux';

require('./styles/main.css'); // Base CSS.

const store = createStore(todoReducer);

render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('app')
);

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import moment from 'moment';
import todoApp from './todoApp';
import App from './components/App.js';

import {
  addTodo,
  toggleTodo
} from './components/ToDo/ToDoActions';

import {
  setVisibilityFilter,
  VISIBILITY_FILTERS
} from './components/Filters/FiltersActions';

const { SHOW_ALL } = VISIBILITY_FILTERS;

import { incrementNextId } from './components/AppActions'

let store = createStore(todoApp, /*window.STATE_FROM_SERVER*/);

/**
Everytime state changes, log it
Note: subscribe returns a function for unregistering the listener
*/
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

//Dispatch some events
store.dispatch(addTodo('learn about actions', moment().subtract(1, 'day').format('YYYY-MM-DD'), 0))
store.dispatch(incrementNextId());
store.dispatch(addTodo('learn about reducers', moment().format('YYYY-MM-DD'), 1))
store.dispatch(incrementNextId());
store.dispatch(addTodo('learn about store', moment().format('YYYY-MM-DD'), 2))
store.dispatch(incrementNextId());
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_COMPLETED))

//unsubscribe();

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

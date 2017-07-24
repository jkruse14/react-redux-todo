import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { shallow, render } from 'enzyme';
import VisibleTodoList from './VisibleToDoList.js';
import todoApp from '../../todoApp';
let store = createStore(todoApp);

import {
  setVisibilityFilter,
  VISIBILITY_FILTERS
} from '../Filters/FiltersActions'

const { SHOW_ALL,
        SHOW_COMPLETED,
        SHOW_INCOMPLETE,
        SHOW_OVERDUE,
        HIDE_OVERDUE} = VISIBILITY_FILTERS

let todos = [];
for(let i = 0; i < 7; i++) {
  todos.push(
    {
      id:i,
      text:"test " + i,
      due_date: "2017-07-19",
      completed: i%2 === 0 ? true : false
    }
  )
}

function getInitialState() {
  return {todos: todos}
}

let provider_wrapper = render(
  <Provider store={store}>
    <VisibleTodoList todos={todos} />
  </Provider>
)

let list_wrapper = provider_wrapper.find(VisibleTodoList)
provider_wrapper.state({todos: todos})

test('Should show all todos', () => {
  expect(true).toEqual(true);
});

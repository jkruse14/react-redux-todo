import React from 'react';
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils';
import { shallow, render } from 'enzyme';
import VisibleTodoList from './VisibleToDoList.js';
import {shallowWithStore} from '../../TestUtils/TestUtils'

let testState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [],
  AppData: {next_id: 0},
  modal: 'NONE'
}
let store = createMockStore(testState);

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

testState.todos = todos;

let component = shallowWithStore(<VisibleTodoList />, store)
component.setState({todos: todos, visibilityFilter: store.visibilityFilter})

test('should render VisibleTodoList', () =>{
  expect(component).toBeTruthy();
})

test('Should show all todos', () => {
  expect(component.state().todos.length).toBe(7)
});

// test('Should show completed todos', () => {
//   testState.visibilityFilter = 'SHOW_COMPLETED'
//   testState.todos = todos
//   console.log(testState)
//   store = createMockStore(testState)
//   component = shallowWithStore(<VisibleTodoList />, store)
//   console.log(component.state())
//   expect(component.state().todos.length).toBe(3)
// });

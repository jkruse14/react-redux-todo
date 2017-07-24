import React from 'react';
import renderer from 'react-test-renderer';

import {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
} from './ToDoActions'


test('should return an action with type ADD_TODO, text, and a due_date', () => {
  let expected = {
    type: 'ADD_TODO',
    text: 'test',
    due_date: '2017-07-19'
  }
  expect(addTodo('test', '2017-07-19')).toEqual(expected);
});

test('should return an action with type TOGGLE_TODO and an index', () => {
  let expected = {
    type: 'TOGGLE_TODO',
    index: 1
  }
  expect(toggleTodo(1)).toEqual(expected);
});

test('should return an action with type DELETE_TODO and an index', () => {
  let expected = {
    type: 'DELETE_TODO',
    id: 1
  }
  expect(deleteTodo(1)).toEqual(expected);
});

test('should return an action with type UPDATE_TODO with a todo', () => {
  let expected = {
    type: 'UPDATE_TODO',
    todo: {text: 'test', due_date: '2017-07-19'}
  }

  let inp = {
    text: 'test', due_date: '2017-07-19'
  }
  expect(updateTodo(inp)).toEqual(expected);
});

import { ADD_TODO,
        TOGGLE_TODO,
        UPDATE_TODO,
        DELETE_TODO} from './ToDoActions'

import {todos} from './ToDoReducers'

let state = [];
let action = {type: 'test'}

test('todos should be defined', () => {
  expect(todos).toBeDefined();
})

test('should default to an empty array', () => {
  expect(todos(state,action)).toEqual([])
})

test('should add a todo with supplied text, due_date, and completed set to false', () => {
  action = {
    type: ADD_TODO,
    text: 'test',
    due_date: '2017-07-19',
  }

  let expected = {
    id: 0,
    text: 'test',
    due_date: '2017-07-19',
    completed: false
  }

  state = todos(state, action)
  expect(state.length).toEqual(1)
  expect(state[0]).toEqual(expected);
})

test('should toggle the state of \'completed\' for the todo id passed to \'index\'', () => {
  state = [
    {
      id: 0,
      text: 'test',
      due_date: '2017-07-19',
      completed: false
    },{
      id: 1,
      text: 'test',
      due_date: '2017-07-19',
      completed: false
    }
  ]

  action = {
    type: TOGGLE_TODO,
    index: 0
  }

  state = todos(state, action)
  expect(state[0].completed).toBe(true);
  expect(state[1].completed).toBe(false);

  state = todos(state, action)
  expect(state[0].completed).toBe(false);
  expect(state[1].completed).toBe(false);
})

test('should update the todo text', () => {
  state = [
    {
      id: 0,
      text: 'test',
      due_date: '2017-07-19',
      completed: false
    }
  ]

  let expected = {
    id: 0,
    text: 'test updated',
    due_date: '2017-07-19',
    completed: false
  }

  action = {
    type: UPDATE_TODO,
    todo: expected
  }

  state = todos(state, action)
  expect(state[0].text).toEqual(expected.text)
})

test('should update the todo due_date', () => {
  state = [
    {
      id: 0,
      text: 'test',
      due_date: '2017-07-19',
      completed: false
    }
  ]

  let expected = {
    id: 0,
    text: 'test',
    due_date: '2017-07-20',
    completed: false
  }

  action = {
    type: UPDATE_TODO,
    todo: expected
  }

  state = todos(state, action)
  expect(state[0].due_date).toEqual(expected.due_date)
})

test('should update only one todo based on id of input todo ', () => {
  state = [
    {
      id: 0,
      text: 'test',
      due_date: '2017-07-19',
      completed: false
    },{
      id: 1,
      text: 'test one',
      due_date: '2017-07-19',
      completed: false
    }

  ]

  let expected = {
    id: 0,
    text: 'test updated',
    due_date: '2017-07-19',
    completed: false
  }

  action = {
    type: UPDATE_TODO,
    todo: expected
  }

  state = todos(state, action)
  expect(state[0].text).toEqual(expected.text)
  expect(state[1].text).toEqual('test one')
})

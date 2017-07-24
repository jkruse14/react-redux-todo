import React from 'react';
import ToDoList from './ToDoList';
import { shallow } from 'enzyme';

let todos = [];
for(let i = 0; i < 5; i++){
  todos.push({
    id:i,
    test: 'test '+i,
    due_date: '2017-07-'+(i+10),
    completed: false
  })
}

let list_wrapper = shallow(
  <ToDoList todos={todos} ></ToDoList>
)

test('should have five todos', () => {
  expect(list_wrapper.state().todos.length).toBe(5)
});

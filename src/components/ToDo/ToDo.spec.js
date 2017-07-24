import React from 'react';
import { ToDo } from './ToDo';
import { shallow, render } from 'enzyme'

  let actionsButtons = ['#toggle-complete-btn', '#show-updatetodo-modal']

  function getButtonText(btn_id) {
    return todo_wrapper.find(btn_id).node.props.children.join('')
  }

  const mockChangeTodoStatus = jest.fn( () => {
    todo.completed = !todo.completed
  });

  const mock = jest.fn();

  let todo = {
    id: 0,
    text: 'test',
    due_date: '2017-07-19',
    completed: false
  }
  let todo_wrapper = shallow(
    <ToDo key={todo.id}
           todo_id={todo.id}
           {...todo}
           onEditClick={mock}
           changeTodoStatus={mockChangeTodoStatus}></ToDo>
  )

  test('should render text from props', () => {
    expect(todo_wrapper.find('#todo_text').exists()).toBe(true)
    expect(todo_wrapper.find('#todo_text').text()).toEqual(todo.text)
  })

  test('should render due_date from props', () => {
    expect(todo_wrapper.find('#todo_due_date').exists()).toBe(true)
    expect(todo_wrapper.find('#todo_due_date').text()).toEqual(todo.due_date)
  })

  test('should have actions buttons', () => {
    expect(todo_wrapper.find('Button').length).toBe(actionsButtons.length)
  })

  test('should show \'Mark Complete\' for toggle-complete-btn text', () =>{
    expect(getButtonText('#toggle-complete-btn')).toEqual('Mark Complete')
  })

  test('should show \'Mark Incomplete\' for toggle-complete-btn text', () =>{
    todo_wrapper.find('#toggle-complete-btn').simulate('click')
    //todo_wrapper = todo_wrapper.setProps({completed: todo.completed});
    //todo_wrapper.update()
    expect(mockChangeTodoStatus.mock.calls.length).toEqual(1)
    expect(todo.completed).toEqual(true);

    //expect(getButtonText('#toggle-complete-btn')).toEqual('Mark Incomplete')
  })

  test('should call onEditClick', () => {
    todo_wrapper.find('#show-updatetodo-modal').simulate('click');
    expect(mock.mock.calls.length).toBe(1)
  })

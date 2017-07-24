import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types'
import ToDo from '../ToDo/ToDo'

class ToDoList extends React.Component {
//= ({todos, onToDoClick, onEditClick}) => {
  constructor(props) {
    super(props)
    console.log(props.todos)
    this.state = {
      todos: props.todos,
    }
    this.onEditClick = props.onEditClick;
    this.changeTodoStatus = props.changeTodoStatus;
  }

  componentWillReceiveProps(nextProps) {
    this.state.todos = [
      ...nextProps.todos
    ]
  }

  render(){
      return (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.state.todos.map((todo,i) => {
            return <ToDo key={todo.id}
                                 todo_id={todo.id}
                                 {...todo}
                                 onEditClick={() => this.onEditClick(todo.id)}
                                 changeTodoStatus={() => this.changeTodoStatus(todo.id)}></ToDo>
          })}
          </tbody>
        </Table>
    )}
  }

ToDoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      due_date: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  changeTodoStatus: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
}

export default ToDoList;

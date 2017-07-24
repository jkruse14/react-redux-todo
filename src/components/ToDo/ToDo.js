import React from 'react'
import {Button, ButtonGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UPDATE_TODO, updateTodo, deleteTodo, toggleTodo } from '../ToDo/ToDoActions'
import { openModal } from '../Modals/ModalsActions'

export class ToDo extends React.Component {
  //= ({text, due_date, completed, onClick}) => (
  constructor(props) {
    super(props)
    this.state = {
      id: props.todo_id,
      text: props.text,
      due_date: props.due_date,
      completed: props.completed
    }
    this.onEditClick = props.onEditClick
    this.changeTodoStatus = props.changeTodoStatus;
    this.deleteTodo = props.deleteTodo;
    this.dispatch = props.dispatch;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.text !== this.state.text || nextProps.due_date !== this.state.due_date) {
      this.setState({
        text: nextProps.text,
        due_date: nextProps.due_date
      })
    }
  }

  handleEditClick() {
    this.onEditClick();
  }

  handleDeleteTodo() {
    this.deleteTodo(this.state.id)
  }

  render() {
    return (
      <tr>
        <td id='todo_text' style={{textDecoration: this.state.completed ? 'line-through':'none' }} >{this.state.text}</td>
        <td id='todo_due_date'>{this.state.due_date}</td>
        <td id='todo_actions' onClick={this.onClick}>
          <ButtonGroup>
            <Button id='toggle-complete-btn' onClick={this.changeTodoStatus}>Mark {this.state.completed === true ? 'Incomplete' : 'Complete'}</Button>
            <Button id='show-updatetodo-modal'
                    bsStyle='primary'
                    onClick={this.handleEditClick.bind(this)}>Edit</Button>
                  <Button id='delete-todo-btn' bsStyle='danger' onClick={this.handleDeleteTodo.bind(this)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    )
  }
}

ToDo.PropTypes = {
  changeTodoStatus: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  due_date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

function mapStateToProps() {
  return {  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
    changeTodoStatus: id => {
      dispatch(toggleTodo(id))
    },
    onEditClick: id => {
      dispatch(openModal({type: UPDATE_TODO, editing_id: id}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)

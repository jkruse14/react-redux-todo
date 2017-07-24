import { connect } from 'react-redux'
import moment from 'moment'
import ToDoList from './ToDoList.js'
import { toggleTodo } from '../ToDo/ToDoActions.js'
import { MODAL_TYPES, openModal } from '../Modals/ModalsActions'

import {
  setVisibilityFilter,
  VISIBILITY_FILTERS
} from '../Filters/FiltersActions'

const { SHOW_ALL,
        SHOW_COMPLETED,
        SHOW_INCOMPLETE,
        SHOW_OVERDUE,
        HIDE_OVERDUE} = VISIBILITY_FILTERS

const { UPDATE_TODO } = MODAL_TYPES

const today = moment();

function getVisibleTodos(todos, filter) {
  switch(filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed === true)
    case SHOW_INCOMPLETE:
      return todos.filter(t => { return t.completed === false })
    case SHOW_OVERDUE:
      return todos.filter( t => { return moment(t.due_date) < today})
    case HIDE_OVERDUE:
      return todos.filter( t => { return moment(t.due_date).startOf('day') >= today.startOf('day') })
    default:
      return todos;
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const VisibleToDoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList)

export default VisibleToDoList

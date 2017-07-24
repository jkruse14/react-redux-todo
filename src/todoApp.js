import { combineReducers } from 'redux';
import {visibilityFilter} from './components/Filters/FiltersReducers.js';
import {todos} from './components/ToDo/ToDoReducers';
import {modal} from './components/Modals/ModalsReducers'

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  modal
  //todosById
});

export default todoApp;

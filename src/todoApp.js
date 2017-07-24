import { combineReducers } from 'redux';
import {visibilityFilter} from './components/Filters/FiltersReducers.js';
import {todos} from './components/ToDo/ToDoReducers';
import {AppData} from './components/AppReducers'
import {modal} from './components/Modals/ModalsReducers'

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  AppData,
  modal
});

export default todoApp;

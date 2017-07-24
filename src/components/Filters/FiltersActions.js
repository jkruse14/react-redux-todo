export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VISIBILITY_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_INCOMPLETE: 'SHOW_INCOMPLETE',
  SHOW_OVERDUE: 'SHOW_OVERDUE',
  HIDE_OVERDUE: 'HIDE_OVERDUE'
}

export function setVisibilityFilter(filter){
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

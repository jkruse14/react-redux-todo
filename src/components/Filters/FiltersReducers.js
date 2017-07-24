import { SET_VISIBILITY_FILTER, VISIBILITY_FILTERS } from './FiltersActions'
const FILTERS = [ VISIBILITY_FILTERS.SHOW_ALL,
                  VISIBILITY_FILTERS.SHOW_COMPLETED,
                  VISIBILITY_FILTERS.SHOW_INCOMPLETE,
                  VISIBILITY_FILTERS.SHOW_OVERDUE,
                  VISIBILITY_FILTERS.HIDE_OVERDUE];
const { SHOW_ALL } = VISIBILITY_FILTERS;

export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      if(FILTERS.indexOf(action.filter) !== -1) {
        return action.filter;
      } else {
        return SHOW_ALL
      }
    default:
      return SHOW_ALL
  }
}

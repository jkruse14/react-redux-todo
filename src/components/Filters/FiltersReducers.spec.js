import React from 'react'

import { SET_VISIBILITY_FILTER, VISIBILITY_FILTERS } from './FiltersActions'
import { visibilityFilter } from './FiltersReducers'

let state = VISIBILITY_FILTERS.SHOW_ALL

test('should return state SHOW_ALL by default', () => {
  let action = {
    type: 'test',
    filter: 'test'
  }
  expect(visibilityFilter('',action)).toBe(VISIBILITY_FILTERS.SHOW_ALL)
})

test('should return state SHOW_ALL if filter is invalid', () => {
  let action = {
    type: SET_VISIBILITY_FILTER,
    filter: 'test'
  }
  expect(visibilityFilter('',action)).toBe(VISIBILITY_FILTERS.SHOW_ALL)
})

test('should set the visibility filter to SHOW_COMPLETED', () => {
  let action = {
    type: SET_VISIBILITY_FILTER,
    filter: VISIBILITY_FILTERS.SHOW_COMPLETED
  }
  expect(visibilityFilter(state,action))
        .toBe(VISIBILITY_FILTERS.SHOW_COMPLETED)
})

test('should set the visibility filter to SHOW_INCOMPLETE', () => {
  let action = {
    type: SET_VISIBILITY_FILTER,
    filter: VISIBILITY_FILTERS.SHOW_INCOMPLETE
  }
  expect(visibilityFilter(state,action))
        .toBe(VISIBILITY_FILTERS.SHOW_INCOMPLETE)
})

test('should set the visibility filter to SHOW_OVERDUE', () => {
  let action = {
    type: SET_VISIBILITY_FILTER,
    filter: VISIBILITY_FILTERS.SHOW_OVERDUE
  }
  expect(visibilityFilter(state,action))
        .toBe(VISIBILITY_FILTERS.SHOW_OVERDUE)
})

test('should set the visibility filter to HIDE_OVERDUE', () => {
  let action = {
    type: SET_VISIBILITY_FILTER,
    filter: VISIBILITY_FILTERS.HIDE_OVERDUE
  }
  expect(visibilityFilter(state,action))
        .toBe(VISIBILITY_FILTERS.HIDE_OVERDUE)
})

import React from 'react';
import renderer from 'react-test-renderer';

import {
  setVisibilityFilter,
  VISIBILITY_FILTERS
} from './FiltersActions'

const { SHOW_ALL,
        SHOW_COMPLETED,
        SHOW_INCOMPLETE,
        SHOW_OVERDUE,
        HIDE_OVERDUE} = VISIBILITY_FILTERS

test('should return an action with type SET_VISIBILITY_FILTER with filter set to SHOW_COMPLETED', () => {
  let expected = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
  }
  expect(setVisibilityFilter(SHOW_COMPLETED)).toEqual(expected);
});

test('should return an action with type SET_VISIBILITY_FILTER with filter set to SHOW_INCOMPLETE', () => {
  let expected = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_INCOMPLETE'
  }
  expect(setVisibilityFilter(SHOW_INCOMPLETE)).toEqual(expected);
});

test('should return an action with type SET_VISIBILITY_FILTER with filter set to SHOW_OVERDUE', () => {
  let expected = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_OVERDUE'
  }
  expect(setVisibilityFilter(SHOW_OVERDUE)).toEqual(expected);
});

test('should return an action with type SET_VISIBILITY_FILTER with filter set to HIDE_OVERDUE', () => {
  let expected = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'HIDE_OVERDUE'
  }
  expect(setVisibilityFilter(HIDE_OVERDUE)).toEqual(expected);
});

test('should return an action with type SET_VISIBILITY_FILTER with filter set to SHOW_ALL', () => {
  let expected = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_ALL'
  }
  expect(setVisibilityFilter(SHOW_ALL)).toEqual(expected);
});

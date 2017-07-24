import React from 'react'

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const UPDATE_DUE_DATE = 'UPDATE_DUE_DATE';
export const UPDATE_TODO  = 'UPDATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(text, due_date, id) {
  return {
    type: ADD_TODO,
    text,
    due_date,
    id
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo
  }
}

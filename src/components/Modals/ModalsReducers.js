import { CLOSE_MODAL, MODAL_TYPES, OPEN_MODAL } from './ModalsActions'

const { NONE, ADD_TODO, UPDATE_TODO } = MODAL_TYPES

export function modal(state = {type:'NONE'}, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return {type: NONE}
    case OPEN_MODAL:
      switch(action.modal.type) {
        case ADD_TODO:
        case NONE:
          return { type: action.modal.type }
        case UPDATE_TODO:
          return { type: action.modal.type, editing_id: action.modal.editing_id}
        default:
          return {type:NONE}
      }
    default:
      return {type: NONE}
  }
}

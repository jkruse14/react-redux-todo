import { CLOSE_MODAL,
        MODAL_TYPES,
        OPEN_MODAL } from './ModalsActions'

import {modal} from './ModalsReducers'

test('should default to NONE', () => {
  expect(modal({},{type:'test'})).toEqual({ type: MODAL_TYPES.NONE })
});

test('should return NONE on CLOSE_MODAL', () => {
  expect(modal({},{type: CLOSE_MODAL})).toEqual({ type: MODAL_TYPES.NONE })
})

test('should return ADD_TODO when action is OPEN_MODAL and modal is ADD_TODO', () => {
  expect(modal({}, {type: OPEN_MODAL, modal:{type:MODAL_TYPES.ADD_TODO}}))
    .toEqual({ type: MODAL_TYPES.ADD_TODO })
})

test('should return NONE when action is OPEN_MODAL and modal is NONE', () => {
  expect(modal({}, {type: OPEN_MODAL, modal:{type:MODAL_TYPES.NONE}}))
    .toEqual({ type: MODAL_TYPES.NONE })
})

test('should return NONE when action is OPEN_MODAL and modal is invalid', () => {
  expect(modal({}, {type: OPEN_MODAL, modal:{type:MODAL_TYPES.NONE}}))
    .toEqual({type: MODAL_TYPES.NONE})
})

test('should return UPDATE and editing_id when action is UPDATE_TODO', () => {
  expect(modal({}, {type: OPEN_MODAL, modal: {
                                                  type:'UPDATE_TODO',
                                                  editing_id:1
                                                }
                   }))
    .toEqual({ type: MODAL_TYPES.UPDATE_TODO, editing_id: 1})
})

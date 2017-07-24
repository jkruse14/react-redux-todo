import {CLOSE_MODAL,
        OPEN_MODAL,
        MODAL_TYPES,
        closeModal,
        openModal} from './ModalsActions'

test('should return an action with type CLOSE_MODAL and modal of NONE', () => {
  let expected = {
    type: CLOSE_MODAL,
    modal: MODAL_TYPES.NONE
  }

  expect(closeModal()).toEqual(expected)
})

test('shouel return action with type OPEN_MODAL and modal of ADD_TODO', () => {
  let expected = {
    type: OPEN_MODAL,
    modal: MODAL_TYPES.ADD_TODO
  }
    expect(openModal(MODAL_TYPES.ADD_TODO)).toEqual(expected);
})

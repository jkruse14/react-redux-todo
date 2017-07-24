export const CLOSE_MODAL = 'CLOSE_MODAL'
export const OPEN_MODAL = 'OPEN_MODAL'

export const MODAL_TYPES = {
  NONE: 'NONE',
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO'
}

export function closeModal() {
  let modal = 'NONE';
  return {
    type: CLOSE_MODAL,
    modal
  }
}

export function openModal(modal) {
  return {
    type: OPEN_MODAL,
    modal
  }
}

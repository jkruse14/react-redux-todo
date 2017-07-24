import {INCREMENT_NEXT_ID, incrementNextId} from './AppActions'

let next_id;

export function AppData(state = {next_id: 0}, action) {
  switch(action.type) {
    case INCREMENT_NEXT_ID:
      let next_id = state.next_id + 1;
      return {
        ...state,
        next_id
      };
    default:
      return state
  }
}

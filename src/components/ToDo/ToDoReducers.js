import { ADD_TODO,
        TOGGLE_TODO,
        UPDATE_TODO,
        DELETE_TODO} from './ToDoActions'

export function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      let new_todo = {
        id: action.id,
        text: action.text,
        due_date: action.due_date,
        completed: false
      }

      return [
          ...state,
          new_todo
        ];
    case DELETE_TODO:
      let todos = [];
      for(let i = 0; i < state.length; i++) {
        if(state[i].id !== action.id) {
          todos.push(state[i]);
        }
      }
      return todos;
    case UPDATE_TODO:
      return [
        ...state.map((todo, index) => {
            if(todo.id === action.todo.id) {
              return {
                ...todo,
                text: action.todo.text,
                due_date: action.todo.due_date
              }
            } else {
              return {...todo}
            }
        })
      ]
    case TOGGLE_TODO:
      return [
        ...state.map((todo, index) => {
          if(index === action.index) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return {...todo}
          }
        })]
    default:
      return state;
  }
}

// fucntion todosById(state = {}, action) {
//   switch(action.type) {
//     case ADD_TODO:
//       new_todo = {
//         text: action.text,
//         due_date: action.due_date,
//         completed: false
//       }
//       return {
//         ...state,
//         index: new_todo
//       }
//     case TOGGLE_TODO:
//       return {
//         ...state
//         index: {
//           ...state[index],
//           completed: !state.todosById[index].completed
//         }
//       }
//     default:
//       return state;
//   }
// }

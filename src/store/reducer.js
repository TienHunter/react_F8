
import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, EDIT_TODO } from './constants'

const initState = {
   todos: [],
   todoInput: ''
}

function reducer(state, action) {
   switch (action.type) {
      case SET_TODO_INPUT:
         return {
            ...state,
            todoInput: action.payload
         }

      case ADD_TODO:
         return {
            ...state,
            todos: [...state.todos, action.payload]
         }

      case REMOVE_TODO: {
         const newTodos = [...state.todos]
         newTodos.splice(action.payload, 1)
         return {
            ...state,
            todos: [...newTodos]
         }
      }
      case EDIT_TODO: {
         let newTodos = [...state.todos]
         newTodos[action.index] = action.payload
         return {
            ...state,
            todos: [...newTodos]
         }
      }
      default:
         throw new Error('Invalid action')
   }
}
export { initState }
export default reducer
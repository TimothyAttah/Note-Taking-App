import { v4 } from 'uuid';
import { LIST_TODOS, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from '../type';

const initialState = {
  todos: [
    {
      id: v4(),
      todo: 'Buy Car'
    },
    {
      id: v4(),
      todo: 'Finish homework'
    },
    {
      id: v4(),
      todo: 'Pray for victory'
    },
    {
      id: v4(),
      todo: 'Submit assignment'
    },
  ]
}

const todosReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case LIST_TODOS:
      return {
        ...state
      }
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : state)
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state
  }
}

export default todosReducer;

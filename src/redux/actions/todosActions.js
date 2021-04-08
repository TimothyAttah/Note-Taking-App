import { LIST_TODOS, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from '../type';

export const listTodos = () => {
  return {
    type: LIST_TODOS,
  }
}

export const createTodo = ( todo ) => {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export const updateTodo = ( id, todo ) => {
  return {
    type: UPDATE_TODO,
    payload: id, todo
  }
}

export const deleteTodo = ( id ) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}
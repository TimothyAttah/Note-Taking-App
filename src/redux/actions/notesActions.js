import { CREATE_NOTE, READ_NOTE, UPDATE_NOTE, DELETE_NOTE, GET_NOTES } from '../type';

export const createNote = ( note ) => {
  return {
    type: CREATE_NOTE,
    payload: note
  }
}

export const readNote = ( id ) => {
  return {
    type: READ_NOTE,
    payload: id
  }
}

export const updateNote = ( id, note ) => {
  return {
    type: UPDATE_NOTE,
    payload: [id, note]
  }
}

export const deleteNote = ( id ) => {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}

export const getNotes = ( id ) => {
  return {
    type: GET_NOTES,
    payload: id
  }
}
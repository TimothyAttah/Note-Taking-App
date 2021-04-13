import { CREATE_NOTE, READ_NOTE, UPDATE_NOTE, DELETE_NOTE, GET_NOTES } from '../type';
import * as api from '../api';


export const createNote = ( notesData ) => async dispatch => {
  try {
    const { data } = await api.createNote( notesData );
    dispatch( {
      type: CREATE_NOTE,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const readNote = ( id ) => {
  return {
    type: READ_NOTE,
    payload: id
  }
}

export const updateNote = ( id, notes ) => {
  return {
    type: UPDATE_NOTE,
    payload: id, notes
  }
}

export const deleteNote = ( id ) => {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}


export const getNotes = () => async dispatch => {
  try {
    const { data } = await api.allNotes();
    dispatch( {
      type: GET_NOTES,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

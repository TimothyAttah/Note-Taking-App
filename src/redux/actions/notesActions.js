import { CREATE_NOTE, READ_NOTE, UPDATE_NOTE, DELETE_NOTE, GET_NOTES, GET_NOTE, LIKE_NOTE, UNLIKE_NOTE } from '../type';
import * as api from '../api';
import history from '../../history';


export const createNote = ({title, content}) => dispatch => {
  fetch( '/api/notes/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({title, content})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data );
        console.log( data.message );
        dispatch( {
          type: CREATE_NOTE,
          payload: data
        } )
        history.push( '/user/notes' )
        window.location.reload( false );
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const getNote = () => dispatch => {
  fetch( '/api/notes/user/note', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    }
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data );
        dispatch( {
          type: GET_NOTE,
          payload: data
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const likeNote = (id) => dispatch => {
  fetch( '/api/notes/user/like', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({noteId: id})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data.message );
        dispatch( {
          type: LIKE_NOTE,
          payload: data.result
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const unlikeNote = (id) => dispatch => {
  fetch( '/api/notes/user/unlike', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({noteId: id})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data.message );
        dispatch( {
          type: UNLIKE_NOTE,
          payload: data.result
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const commentsNote = (text,noteId) => dispatch => {
  fetch( '/api/notes/user/comments', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem('jwt')
    },
    body: JSON.stringify({noteId, text})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data.message );
        dispatch( {
          type: UNLIKE_NOTE,
          payload: data.result
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
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

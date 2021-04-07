import { CREATE_NOTE, READ_NOTE, UPDATE_NOTE, DELETE_NOTE, GET_NOTES } from '../type';
import {v4} from 'uuid'

const initialState = {
  notes: [
    {
      id: v4(),
      title: 'Merry Christmas',
      content: 'Christmas is a wonderful things to celebrate'
    },
    {
      id: v4(),
      title: 'February Born',
      content: 'To be born in February is a blessing'
    },
    {
      id: v4(),
      title: 'Working & Learning',
      content: 'I am a proud student who have an amazing teacher. And I am working with him as well.'
    },
    {
      id: v4(),
      title: 'God Gift',
      content: 'God gifts is thing of blessing from God. Use it well'
    },
  ]
}

const notesReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case CREATE_NOTE:
      return {
        ...state,
        notes: [ action.payload, ...state.notes ]
      };
    case GET_NOTES:
      return {
        ...state
      }
    case READ_NOTE:
      return {
        ...state,
        notes: action.payload
      }
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map( ( note, id ) => {
          
        })
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    default:
      return state;
  }
}

export default notesReducer;
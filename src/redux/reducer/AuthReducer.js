import { SIGN_UP, SIGN_IN, GET_USER, SIGN_OUT } from '../type';

const authReducer = ( users = [], action ) => {
  switch ( action.type ) {
    case SIGN_UP:
    case SIGN_IN:
      return [ action.payload, ...users ]
    case GET_USER:
      return action.payload
    case SIGN_OUT:
      return action.payload
    default:
      return users
  }
}

export default authReducer;

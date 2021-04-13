import { SIGN_UP, GET_USER } from '../type';

const authReducer = ( users = [], action ) => {
  switch ( action.type ) {
    case SIGN_UP:
      return [ action.payload, ...users ]
    case GET_USER:
      return action.payload
    default:
      return users
  }
}

export default authReducer;

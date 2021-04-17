import { GET_AUTH_USER } from '../type';

const userReducer = ( authUser = [], action ) => {
  switch (action.type) {
    case GET_AUTH_USER:
    return action.payload
     
    default:
     return authUser;
  }
}

export default userReducer;
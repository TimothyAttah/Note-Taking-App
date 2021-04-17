import { GET_AUTH_USER } from '../type';

const initialState =  {
  authUser: []
}

const userReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case GET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload
    }
     
    default:
     return state
  }
}

export default userReducer;
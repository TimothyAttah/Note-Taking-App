import { FOLLOW_USER, GET_AUTH_USER, UNFOLLOW_USER } from '../type';

const initialState =  {
  authUser: [],
  following: [],
  followers: []
}

const userReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case GET_AUTH_USER:
    case UNFOLLOW_USER:
      return {
        ...state,
        authUser: action.payload
      }
    case FOLLOW_USER:
      return {
        ...state,
        followers: [...state.followers, action.payload.followers],
        following: [...state.following, action.payload.following],
        authUser: [...state.authUser, action.payload.followers,  action.payload.following ]
      }
     
    default:
     return state
  }
}

export default userReducer;
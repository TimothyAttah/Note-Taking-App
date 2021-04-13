import { SIGN_UP, GET_USER } from '../type';
import * as api from '../api';

export const userSignup = (userData) => dispatch => {
  fetch( '/api/user/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({userData})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
        return
      } else {
        console.log( data.message );
        dispatch( {
          type: SIGN_UP,
          payload: data.users
        })
    }
    } ).catch( err => {
    console.log(err);
  })
}
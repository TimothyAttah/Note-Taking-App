import { GET_AUTH_USER } from '../type';


export const getAuthUser = (id) => dispatch => {
   fetch( `/api/auth/user/${id}`, {
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
          type: GET_AUTH_USER,
          payload: data
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}
import { GET_AUTH_USER } from '../type';

export const getAuthUser = (id) => dispatch => {
  fetch( `/api/auth/user/${ id }`, {
    method: 'GET',
    headers: {
      Authorization: "Bearer "+ localStorage.getItem('jwt')
    }
  } ).then( res => res.json() )
    .then( data => {
    console.log(data);
    } )
    .catch( error => {
    console.log(error);
  })
}
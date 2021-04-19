import { FOLLOW_USER, GET_AUTH_USER } from '../type';


export const getAuthUser = (id) => dispatch => {
   fetch( `https://notes-taking-app-front-end.herokuapp.com/api/auth/user/${id}`, {
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


 export const followUser = (id) => dispatch => {
    fetch( 'https://notes-taking-app-front-end.herokuapp.com/api/auth/user/follow', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ localStorage.getItem('jwt')
      },
      body: JSON.stringify({followId: id})
    } ).then( res => res.json() )
      .then( data => {
        console.log(data.result.following);
        dispatch( {
          type: FOLLOW_USER,
          payload: {following: data.result.following, followers: data.result.followers}
       })
      } )
      .catch( err => {
      console.log(err);
    })
  }
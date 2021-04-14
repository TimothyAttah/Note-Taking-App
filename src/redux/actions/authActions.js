import { SIGN_UP, SIGN_IN, GET_USER } from '../type';
import history from '../../history';

export const userSignup = ({firstName, lastName, email, password}) => dispatch => {
  fetch( '/api/user/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( {
      firstName,
      lastName,
      email,
      password
    })
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data.message );
        dispatch( {
          type: SIGN_UP,
          payload: data.users
        } )
        history.push('/user/signin')
    }
    } ).catch( err => {
    console.log(err);
  })
}


export const userSignin = ({email, password}) => dispatch => {
  fetch( '/api/user/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log( data.message );
        localStorage.setItem( 'jwt', data.token );
        localStorage.setItem( 'user', JSON.stringify(data.users) );
        dispatch( {
          type: SIGN_IN,
          payload: data.users
        } )
        history.push('/user/notes')
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const getUsers = () => dispatch => {
  fetch( '/api/user', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        dispatch( {
          type: GET_USER,
          payload: data.savedUsers
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}
import { SIGN_UP, SIGN_IN, GET_USER, SIGN_OUT } from '../type';
import history from '../../history';

export const userSignup = ({firstName, lastName, email, password}) => dispatch => {
  fetch( '/https://elastic-bardeen-7cf415.netlify.app/api/user/signup', {
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
  fetch( 'https://elastic-bardeen-7cf415.netlify.app/api/user/signin', {
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
        console.log(data);
        console.log( data.message );
        localStorage.setItem( 'jwt', data.token );
        localStorage.setItem( 'user', JSON.stringify(data.users) );
        dispatch( {
          type: SIGN_IN,
          payload: data
        } )
        history.push( '/user/notes' )
        window.location.reload( false );
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const getUsers = () => dispatch => {
  fetch( 'https://elastic-bardeen-7cf415.netlify.app/api/user', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  } ).then( res => res.json() )
    .then( data => {
      if ( data.error ) {
        console.log( data.error );
      } else {
        console.log(data);
        dispatch( {
          type: GET_USER,
          payload: data.savedUsers
        } )
    }
    } ).catch( err => {
    console.log(err);
  })
}

export const logout = () => {
  return {
    type: SIGN_OUT,
    payload: null
  }
}
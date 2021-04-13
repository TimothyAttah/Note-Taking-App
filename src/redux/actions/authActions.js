import { SIGN_UP, GET_USER } from '../type';
import * as api from '../api';

export const userSignup = (users) => async dispatch => {
  try {
    const { data } = await api.signUpUser( users );
    console.log(data);
    dispatch( {
      type: SIGN_UP,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}
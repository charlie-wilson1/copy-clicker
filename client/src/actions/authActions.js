import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('api/users/register', userData)
    .then(res => {
      // toast
      toast('Welome! You can now login.');
      // redirect
      history.push('/login');
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const forgotUser = (userData, history) => dispatch => {
  axios
    .post('api/users/forgot', userData)
    .then(res => {
      // toast
      toast('Password reset email sent!');
      // redirect
      history.push('/');
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = (userData, history) => dispatch => {
  axios
    .post('api/users/login', userData)
    .then(res => {
      //toast
      toast('Welcome home big daddy 🍾');
      // Save to localStorage
      const { token } = res.data;
      //set token to ls
      localStorage.setItem('jwtToken', token);
      // set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // remove the token from localsctorage
  localStorage.removeItem('jwtToken');

  //remove the auth header for future requests
  setAuthToken(false);

  //set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

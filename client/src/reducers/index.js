import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';

// add all reducers here...
// combine all reducers here...
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  post: postReducer,
  profile: profileReducer
});

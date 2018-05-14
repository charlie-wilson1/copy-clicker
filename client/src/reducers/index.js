import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
// add all reducers here...
// combine all reducers here...
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});

import { combineReducers } from 'redux';
import authReducer from './authReducer';

// add all reducers here...
// combine all reducers here...
export default combineReducers({
  auth: authReducer
});

//The reducer is a pure function that takes the previous state and an action,
// and returns the next state. It's called a reducer because it's the
//  type of function you would pass to Array.prototype.reduce(reducer, ?initialValue) .

// Say you eat a chocolate from a box of chocolates.
// An action is simply an object that is what type of chocolate, amount,
// etc. An action creator is a function that can be called by a component
// that dispatches the EAT_CHOCOLATE action to the reducer. A reducer listens
//  for this action and updates the store by creating a copy of the state and
//  returning the copy with one less chocolate.

// https://egghead.io/courses/getting-started-with-redux
// My ELI5 version might be:
// Actions are dispatched when something happens. Each piece of your state is controlled
// by a reducer. The reducer's job is to listen to all actions, wait for ones it cares about,
// and update its slice of state accordingly.
// Every action passes through every reducer.
import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}

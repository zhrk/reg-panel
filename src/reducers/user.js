import { SET_NAME } from '../actions/userActions';
import { SET_EMAIL } from '../actions/userActions';
import { SET_RATE } from '../actions/userActions';

const initialState = {
  name: 'Unknown',
  email: 'Unknown',
  rate: 'Unknown'
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};

    case SET_EMAIL:
      return {...state, email: action.payload};

    case SET_RATE:
      return {...state, rate: action.payload};

    default:
      return state;
  }
};
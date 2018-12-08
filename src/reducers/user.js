import { SET_NAME } from '../actions/userActions';
import { SET_EMAIL } from '../actions/userActions';
import { SET_RATE } from '../actions/userActions';
import { SET_PAYWAY } from '../actions/userActions';

const initialState = {
  name: 'Unknown',
  email: 'Unknown',
  rate: 'Unknown',
  payWay: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};

    case SET_EMAIL:
      return {...state, email: action.payload};

    case SET_RATE:
      return {...state, rate: action.payload};

    case SET_PAYWAY:
      return {...state, payWay: action.payload};

    default:
      return state;
  }
};
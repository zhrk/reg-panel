import { combineReducers } from 'redux';
import { userReducer } from './user';
import { progressReducer } from './progress';

export const rootReducer = combineReducers({
  user: userReducer,
  progress: progressReducer
});
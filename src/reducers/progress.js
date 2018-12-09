import { SET_CURRENT_STEP } from '../actions/progressActions';

const initialState = {
  currentStep: 6,
  totalSteps: 10
}

export const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return {...state, currentStep: action.payload};

    default:
      return state;
  }
};
export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';

export const setCurrentStep = step => {
  return {
    type: SET_CURRENT_STEP,
    payload: step
  };
};
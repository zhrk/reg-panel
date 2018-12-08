export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_RATE = 'SET_RATE';
export const SET_PAYWAY = 'SET_PAYWAY';

export const setName = name => {
  return {
    type: SET_NAME,
    payload: name
  };
};

export const setEmail = email => {
  return {
    type: SET_EMAIL,
    payload: email
  };
};

export const setRate = rate => {
  return {
    type: SET_RATE,
    payload: rate
  };
};

export const setPayWay = payWay => {
  return {
    type: SET_PAYWAY,
    payload: payWay
  };
};
import {USER_LOGIN, LOG_OUT} from '../../actions/actionTypes';

const INITIALSTATE = {
  data: null,
  token: null,
};

export default (state = INITIALSTATE, action: any) => {
  console.log('action.valuesfromReducer', action.values);
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action?.values,
      };
    case LOG_OUT:
      return {...state, token: null};
    default:
      return state;
  }
};

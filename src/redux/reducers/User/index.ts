import {
  SAVE_FACM_TOKEN,
  START_LOADING,
  STOP_LOADING,
  USER_LOGIN,
  START_LOADING_SOCIAL,
  STOP_LOADING_SOCIAL,
  USER_SCAN,
  LOG_OUT,
} from '../../actions/types';

const INITIALSTATE = {
  data: null,
  token: null,
  loginLoading: false,
  fcmToken: null,
  socialLoading: false,
  scanData: null,
};

export default (state = INITIALSTATE, action: any) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loginLoading: true,
      };
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.data.data.token,
        data: action.payload.data,
      };
    case USER_SCAN:
      return {
        ...state,
        scanData: action.payload.data,
      };
    case STOP_LOADING:
      return {
        ...state,
        loginLoading: false,
      };
    case START_LOADING_SOCIAL:
      return {
        ...state,
        socialLoading: true,
      };
    case STOP_LOADING_SOCIAL:
      return {
        ...state,
        socialLoading: false,
      };
    case SAVE_FACM_TOKEN:
      return {...state, fcmToken: action.payload.fcmToken};

    case LOG_OUT:
      return {...state, token: null};
    default:
      return state;
  }
};

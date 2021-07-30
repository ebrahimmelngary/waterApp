import {USER_LOGIN, LOG_OUT} from '../actionTypes';

export const UserLogin =
  (values: any) => async (dispatch: (arg0: {values: any}) => any) => {
    dispatch({type: USER_LOGIN, values});
  };

// export const UserRegister = (values, navigate) => {

// };

export const Log_Out =
  () => async (dispatch: (arg0: {type: string}) => any) => {
    await dispatch({type: LOG_OUT});
  };

// import {makePostRequest} from '../../../services';
import {useUserToken} from '../../../utilities/CustomHooks/useUserToken';
import {START_LOADING, STOP_LOADING, USER_LOGIN, LOG_OUT} from '../actionTypes';

// export const UserLogin = (values, navigate) => {
//   return async dispatch => {
//     dispatch({type: START_LOADING});
//     await makePostRequest({
//       url: 'api/app_login',
//       data: values,
//     }).then(response => {
//       global.toast.show(response.data.message);
//       if (response.data.data !== null) {
//         dispatch({type: USER_LOGIN, payload: response});
//         navigate('Drawer');
//         dispatch({type: STOP_LOADING});
//       }
//     });
//     dispatch({type: STOP_LOADING});
//   };
// };

export const UserRegister = (values, navigate) => {
  return async dispatch => {
    dispatch({type: START_LOADING});
    await makePostRequest({
      url: 'api/registration',
      data: values,
    }).then(response => {
      console.log('regusier', response);
      global.toast.show(response.data.message);
      if (response.data.data !== null) {
        dispatch({type: USER_LOGIN, payload: response});
        navigate('Drawer');
        dispatch({type: STOP_LOADING});
      }
      dispatch({type: STOP_LOADING});
    });
    dispatch({type: STOP_LOADING});
  };
};

export const Log_Out = () => async dispatch => {
  await dispatch({type: LOG_OUT});
};

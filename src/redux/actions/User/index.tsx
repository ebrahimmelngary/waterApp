// import {makePostRequest} from '../../../services';
// import {
//   START_LOADING,
//   STOP_LOADING,
//   USER_LOGIN,
//   STOP_LOADING_SOCIAL,
//   START_LOADING_SOCIAL,
//   LOG_OUT,
// } from '../types';

// export const UserLogin = (values, navigate) => {
//   return async (dispatch) => {
//     dispatch({type: START_LOADING});
//     await makePostRequest({
//       url: 'api/app_login',
//       data: values,
//     }).then((response) => {
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

// export const socialSignIn = (values, navigate) => {
//   return async (dispatch) => {
//     dispatch({type: START_LOADING_SOCIAL});
//     await makePostRequest({
//       url: 'api/Social_Login',
//       data: values,
//     }).then((response) => {
//       global.toast.show(response.data.message);

//       if (response.data.data.phone === null) {
//         navigate('CodeVerification', {values});
//       } else {
//         dispatch({type: USER_LOGIN, payload: response});
//         // dispatch({type: SOCIAL_LOGIN, payload: response});
//         navigate('Drawer');
//       }
//     });
//     dispatch({type: STOP_LOADING_SOCIAL});
//   };
// };

// export const UserRegister = (values, navigate) => {
//   return async (dispatch) => {
//     dispatch({type: START_LOADING});
//     await makePostRequest({
//       url: 'api/registration',
//       data: values,
//     }).then((response) => {
//       console.log('regusier', response);
//       global.toast.show(response.data.message);
//       if (response.data.data !== null) {
//         dispatch({type: USER_LOGIN, payload: response});
//         navigate('Drawer');
//         dispatch({type: STOP_LOADING});
//       }
//       dispatch({type: STOP_LOADING});
//     });
//     dispatch({type: STOP_LOADING});
//   };
// };

// export const Log_Out = () => async (dispatch) => {
//   await dispatch({type: LOG_OUT});
// };

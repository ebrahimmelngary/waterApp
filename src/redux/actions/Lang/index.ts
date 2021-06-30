import {APPLY_LANGUAGE} from '../actionTypes';
import RNRestart from 'react-native-restart';
import {I18nManager} from 'react-native';
import {LangType} from '../../reducers/Lang';

export const applyLanguage = (lang: LangType) => async (
  dispatch: (action: {type: string; payload: LangType}) => any,
) => {
  await dispatch({type: APPLY_LANGUAGE, payload: lang});
  I18nManager.forceRTL(lang === 'ar');
  setTimeout(() => {
    RNRestart.Restart();
  }, 10);
};

import {APPLY_LANGUAGE} from '../../actions/types';

export type LangType = 'en' | 'ar';

export default (state: LangType = 'en', action: {type: any; payload: any}) => {
  switch (action.type) {
    case APPLY_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

import {combineReducers} from 'redux';
import LangReducer from './Lang';
import UserReducer from './User';
import IntroReducer from './Intro';
import Address from './Address';

const rootReducer = combineReducers({
  lang: LangReducer,
  user: UserReducer,
  address: Address,
  intro: IntroReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;

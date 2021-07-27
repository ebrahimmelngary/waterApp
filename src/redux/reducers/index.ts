import {combineReducers} from 'redux';
import LangReducer from './Lang';
// import UserReducer from './User';
import IntroReducer from './Intro';
import Order from './Order';

const rootReducer = combineReducers({
  lang: LangReducer,
  // user: UserReducer,
  order: Order,
  intro: IntroReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;

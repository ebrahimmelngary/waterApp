import {combineReducers} from 'redux';
import LangReducer from './Lang';
import UserReducer from './User';
import IntroReducer from './Intro';


const rootReducer = combineReducers({
  lang: LangReducer,
  // user: UserReducer,
  intro: IntroReducer
 
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;

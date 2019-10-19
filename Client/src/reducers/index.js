import { combineReducers } from 'redux';
import tomoReducer from './tomoReducers';

const rootReducer = combineReducers({
  tomo: tomoReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import postReducer from './postReducer';
import accountReducer from './accountReducer';

const reducers = combineReducers({
  account: accountReducer,
  post: postReducer
})

export default reducers
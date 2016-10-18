import { combineReducers } from 'redux';
import { messageReducer as messages } from './messageReducer';

const reducers: StoreStateType = {
  messages
};

const rootReducer = combineReducers(reducers);
 
export default rootReducer;


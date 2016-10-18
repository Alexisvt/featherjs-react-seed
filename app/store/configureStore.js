import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';

export default function configureStore(initialState) {
  return createStore(rootReducer, applyMiddleware(logger()));
}
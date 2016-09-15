import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers'

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger)
);

export default store;

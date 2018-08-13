import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from "redux-logger";
import {reducer} from './reducer';
import { initState } from './state';

const logger = createLogger({
  // ...options
});

const middlewares = [thunkMiddleware,logger ];

export function initializeStore () {
  return createStore(reducer, initState, composeWithDevTools(applyMiddleware(...middlewares)))
}
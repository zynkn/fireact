import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

//Only apply when you are in Development.
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// preloadedState is received initial state when it is rendered by server side.
const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
  applyMiddleware(...middlewares)
));

export default configure;

import modules from './modules';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof any;
//   }
// }
// Development Mode ONLY.
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
const composeEnhancers = devtools || compose;


const configureStore = () => {


  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    modules, /* preloadedState, */
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )

  );

  sagaMiddleware.run(mySaga);
  return store;
}
export default configureStore;
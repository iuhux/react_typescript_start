import {
  applyMiddleware,
  createStore,
  combineReducers
  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducers} from '../reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddlewares = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState={}) {
  return createStoreWithMiddlewares(reducer, initialState);
}
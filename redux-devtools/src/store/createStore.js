import { createStore, combineReducers, compose } from 'redux'
import DevTools from './../utils/DevTools'
import * as reducers from './modules'

export default function(initialState) {
  const enhancer = compose(
    DevTools.instrument()
  );
  return createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  )
}

import { createStore, combineReducers, compose } from 'redux'
import * as reducers from './modules'
import DevTools from '@utils/DevTools'

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

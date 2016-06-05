import { createStore, combineReducers, compose } from 'redux'
import * as reducers from './modules'

export default function(initialState) {
  return createStore(
    combineReducers({ ...reducers }),
    initialState,
  )
}

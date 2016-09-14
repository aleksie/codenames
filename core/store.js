/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { combineReducers, createStore } from 'redux'

import rootReducer from '../reducers'

const store = createStore(rootReducer)

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch

  if (!console.group)
    return rawDispatch

  return action => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}


if (process.env.NODE_ENV !== 'production') {
  store.dispatch = addLoggingToDispatch(store)
}

export default store;

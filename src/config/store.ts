/**
 * store 状态管理
 * 2018-10-11
 * @author koohead
 * @description redux store
 */

import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import Router from './router'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux'

// 初始化router状态
const initialState = Router.router.getStateForAction(Router.router.getActionForPathAndParams('main')!)

const navReducer = (state = initialState, action: any) => {
  const nextState = Router.router.getStateForAction(action, state)
  return nextState || state
};


const middleware = createReactNavigationReduxMiddleware(
  'main',
  (state: any) => state.nav
)

const appReducer = combineReducers({
  nav: navReducer
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  {},
  compose(
    applyMiddleware(middleware),
    applyMiddleware(thunk)
  )
)
persistStore(store)

export default store

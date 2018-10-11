/**
 * react-navigation 状态管理
 * 2018-10-11
 * @author koohead
 * @description 路由状态管理器
 */

import Router from './router'
import { connect } from 'react-redux'
import {
  reduxifyNavigator
} from 'react-navigation-redux-helpers'

const App = reduxifyNavigator(Router, 'main')

const mapStateToProps = (state: any) => ({
  state: state.nav
})

const AppWithNavigationState = connect(mapStateToProps, {})(App)

export default AppWithNavigationState

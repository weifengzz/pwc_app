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

/**
 * @class
 * @classdesc router状态管理
 * 关于reduxifyNavigator方法，TypeScript需要修改源码，
 * 以此来通过验证
 * export function reduxifyNavigator<S>(
 *  navigator: Navigator,
 *  key: string,
 * ) : React.ComponentType<{ state: NavigationState; dispatch?: NavigationDispatch }>;
 * ----------------------------------------------------------^------------------------
 */
const App = reduxifyNavigator(Router, 'main')

const mapStateToProps = (state: any) => ({
  state: state.nav
})

const AppWithNavigationState = connect(mapStateToProps, {})(App)

export default AppWithNavigationState

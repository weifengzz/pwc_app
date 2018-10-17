/**
 * 返回键状态管理
 * 2018-10-17
 * @author koohead
 * @description 返回键状态管理
 */

import React from 'react'
import { Component } from 'react'
import AppWithNavigationState from './app_with_navigation_state'
import { connect } from 'react-redux'
import { IAppNavigationControlProps } from './PropType'

/**
 * @class
 * @classdesc 返回状态管理
 */
class AppNavigationControl extends Component<IAppNavigationControlProps> {
  render () {
    return (
      <AppWithNavigationState />
    )
  }
}

const mapStateToProps = (state: any) => ({
  nav: state.nav
})

export default connect(mapStateToProps, {})(AppNavigationControl)

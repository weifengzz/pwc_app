/**
 * 配置入口
 * 2018-10-12
 * @author koohead
 * @description 配置入口
 */

import React from 'react'
import { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import AppWithNavigationState from './app_with_navigation_state'
import {
  View
} from 'react-native'

/**
 * @class
 * @classdesc 绑定redux组件
 */
export default class App extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </View>
    )
  }
}



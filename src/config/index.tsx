/**
 * 配置入口
 * 2018-10-12
 * @author koohead
 * @description 配置入口
 */

import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import AppNavigationControl from './app_navigation_control'
import {
  View
} from 'react-native'
import CodePush from 'react-native-code-push'
import SplahScreen from 'react-native-splash-screen'
import {
  log,
  logWarm,
  logErr
} from '../utils'

/**
 * @class
 * @classdesc 绑定redux组件
 */
export default class App extends Component {
  componentDidMount () {
    SplahScreen.hide()
    // CodePush.sync({
    //   installMode: CodePush.InstallMode.IMMEDIATE,
    //   updateDialog: {
    //     appendReleaseDescription: true,
    //     descriptionPrefix: '升级？',
    //     mandatoryContinueButtonLabel: '继续',
    //     mandatoryUpdateMessage: '是否升级',
    //     optionalIgnoreButtonLabel: '取消',
    //     optionalInstallButtonLabel: '升级',
    //     optionalUpdateMessage: '是否要升级',
    //     title: '是否升级'
    //   }
    // })
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <Provider store={store}>
          <AppNavigationControl />
        </Provider>
      </View>
    )
  }
}



/**
 * app路由管理器
 * 2018-10-11
 * @author koohead
 * @description app导航管理
 */

import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  NavigationNavigator,
  NavigationRouteConfig
} from 'react-navigation'

// 首页
import { HomeScreen } from '../modules/home/screens'
// 我的
import { ProfileScreen } from '../modules/profile/screens'
// 引导页
import { GuideScreen } from '../modules/guide/screens'
// 广告页
import { OpenAdsScreen } from '../modules/ads/screens'

import Icon from 'react-native-vector-icons/FontAwesome'


const tabOptions = (navigation: NavigationNavigator, tabName: string, activeTintTab: string, inactiveTintTab: string ) => {
  return {
    tabBarLabel: tabName,
    tabBarIcon: (opt: any) => {
      if (opt.focused){
        return (
          <Icon name={activeTintTab} size={25} color='#d0648f' />
        )
      } else {
        return (
          <Icon name={inactiveTintTab} size={25} color='gray' />
        )
      }
    }
  }
}

/**
 * 主页面
 */
const mainNavigator = createStackNavigator({
  mainTab: {
    screen: createBottomTabNavigator({
      home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }: NavigationRouteConfig) => {
          return tabOptions(navigation, '首页', 'home', 'home')
        }
      },
      profile: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }: NavigationRouteConfig) => {
          return tabOptions(navigation, '我的', 'github-alt', 'github-alt')
        }
      }
    }, {
      //点击哪个才加载哪个tab里的页面
      lazy: true,
      //设置tab放在界面的底部
      tabBarPosition: 'bottom',
      //设置tab里面的样式
      tabBarOptions: {
          style: {
            backgroundColor: 'white',
            height: 44
          },
          labelStyle: {
            fontSize: 12
          },
          activeTintColor: '#d0648f',
          inactiveTintColor: 'gray'
      }
  })
  }
})

/**
 * 引导页
 */
const GuideNavigator = createStackNavigator({
  welcome: {
    screen: GuideScreen
  }
}, {
  navigationOptions: {
    header: null
  }
})

/**
 * 广告页
 */
const AdsNavigator = createStackNavigator({
  open_ads: {
    screen: OpenAdsScreen
  }
}, {
  navigationOptions: {
    header: null
  }
})

/**
 * 路由配置
 */
const Router = createSwitchNavigator({
  guide: GuideNavigator,
  ads: AdsNavigator,
  main: mainNavigator
}, {
  initialRouteName: 'guide'
})


export default Router

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
  createSwitchNavigator
} from 'react-navigation'

// 图标库
import { Icon } from '../components'

// 首页
import { HomeScreen } from '../modules/home/screens'
// 我的
import { ProfileScreen } from '../modules/profile/screens'
// 引导页
import { GuideScreen } from '../modules/guide/screens'
// 广告页
import { OpenAdsScreen } from '../modules/ads/screens'


/**
 * tab 按钮样式配置
 * @param tabName tab名称
 * @param activeTintTab 选中tab，Icon名称
 * @param inactiveTintTab 未选中tab, Icon名称
 */
const tabOptions = (tabName: string, activeTintTab: string, inactiveTintTab: string) => {
  return {
    header: null,
    tabBarLabel: tabName,
    tabBarIcon: (opt: any) => {
      if (opt.focused) {
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
        navigationOptions: () => {
          return tabOptions('首页', 'p_home_fill', 'p_home')
        }
      },
      profile: {
        screen: ProfileScreen,
        navigationOptions: () => {
          return tabOptions('我的', 'p_people_fill', 'p_people')
        }
      }
    }, {
      // 点击哪个才加载哪个tab里的页面
      lazy: true,
      // 设置tab放在界面的底部
      tabBarPosition: 'bottom',
      // 设置tab里面的样式
      tabBarOptions: {
          style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            height: 45
          },
          labelStyle: {
            fontSize: 12,
            margin: 0
          },
          pressColor: 'red',
          activeTintColor: '#d0648f',
          inactiveTintColor: 'gray'
      }
  })
  }
}, {
  navigationOptions: {
    header: null
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

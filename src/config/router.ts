/**
 * app路由管理器
 * 2018-10-11
 * @author koohead
 * @description app导航管理
 */

import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'

// 首页
import { HomeScreen } from '../modules/home/screens'
// 我的
import { ProfileScreen } from '../modules/profile/screens'
// 引导页
import { GuideScreen } from '../modules/guide/screens'
// 广告页
import { OpenAdsScreen } from '../modules/ads/screens'


/**
 * 主页面
 */
const mainNavigator = createStackNavigator({
  mainTab: {
    screen: createBottomTabNavigator({
      home: {
        screen: HomeScreen
      },
      profile: {
        screen: ProfileScreen
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
})

const AdsNavigator = createStackNavigator({
  open_ads: {
    screen: OpenAdsScreen
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

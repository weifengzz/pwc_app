/**
 * app路由管理器
 * 2018-10-11
 * @author koohead
 * @description app导航管理
 */

import {
  TabNavigator,
  StackNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  SwitchNavigator
} from 'react-navigation'

// 首页
import { HomeScreen } from '../modules/home/screens'
// 我的
import { ProfileScreen } from '../modules/profile/screens'
// 引导页
import { GuideScreen } from '../modules/guide/screens'


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

const GuideNavigator = createStackNavigator({
  welcome: {
    screen: GuideScreen
  }
})

/**
 * 路由配置
 */
const Router = createSwitchNavigator({
  guide: GuideNavigator,
  main: mainNavigator
}, {
  initialRouteName: 'guide'
})


export default Router

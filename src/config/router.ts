/**
 * app路由管理器
 * 2018-10-11
 * @author koohead
 * @description app导航管理
 */

import { TabNavigator, StackNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// 首页
import { HomeScreen } from '../modules/home/screens'
// 我的
import { ProfileScreen } from '../modules/profile/screens'

/**
 * @class
 * @classdesc 路由配置
 */
// const Router = createStackNavigator({
//   main: StackNavigator({
//     screen: StackNavigator({
//       mainTab: {
//         screen: TabNavigator({
//           home: {
//             screen: HomeScreen
//           },
//           profile: {
//             screen: ProfileScreen
//           }
//         })
//       }
//     })
//   })
// })

const Router = createStackNavigator({
  main: {
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

export default Router

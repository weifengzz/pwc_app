/**
 * app入口
 * 2018-10-12
 * @author koohead
 * @description app 入口
 */

import {AppRegistry} from 'react-native'
import App from './src/config';
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)

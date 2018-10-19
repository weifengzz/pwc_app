/**
 * 引导界面样式
 */
import { ViewStyle } from 'react-native'

/**
 * 引导界面样式
 * @interface
 */
export interface IGuideStyle {
  container: ViewStyle
}

/**
 * 引导界面样式
 */
export const GuideStyle = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

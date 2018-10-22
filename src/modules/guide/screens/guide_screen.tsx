/**
 * 引导界面
 * 2018-10-17
 * @author koohead
 * @description 引导界面
 */

import React from 'react'
import { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { GuideStyle } from './style'

import { IGuideProps } from './PropsType'
import CodePush from 'react-native-code-push'

const GuideStyles = StyleSheet.create<any>(GuideStyle)

class GuideScreen extends Component<IGuideProps> {
  static defaultProps = {
    styles: GuideStyles
  }

  /**
   * 按钮点击事件
   */
  onPress = () => {
    this.props.navigation.navigate('ads')
  }

  render () {
    const { styles } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            this.onPress()
          }}
        >跳转</Text>
        <Text
          style={{marginTop: 30}}
          onPress={() => {

          }}
        >检查更新</Text>
        <Text
          style={{marginTop: 30}}
          onPress={() => {
            
          }}
        >更新</Text>
      </View>
    )
  }
}

export default GuideScreen

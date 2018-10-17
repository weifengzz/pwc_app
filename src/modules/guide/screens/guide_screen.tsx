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

const GuideStyles = StyleSheet.create<any>(GuideStyle)

class GuideScreen extends Component<IGuideProps> {
  static defaultProps = {
    styles: GuideStyles
  }

  /**
   * 按钮点击事件
   */
  onPress = () => {
    this.props.navigation.navigate('mainTab')
  }

  render () {
    const { styles } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            this.onPress()
          }}
        >引导页</Text>
      </View>
    )
  }
}

export default GuideScreen

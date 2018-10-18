/**
 * 开屏广告界面
 * 2018-10-18
 * @author koohead
 * @description 开屏广告界面
 */

import React from 'react'
import { Component } from 'react'

import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import { AdsStyle } from './style'
import { IOpenAdsProps } from './PropsType'

const GuideStyles = StyleSheet.create<any>(AdsStyle)

class OpenAdsScreen extends Component<IOpenAdsProps> {
  static defaultProps = {
    styles: GuideStyles
  }
  render () {
    const { styles, navigation } = this.props
    return (
      <View style={styles.container}>
        <Text onPress={() => {
          navigation.navigate('mainTab')
        }}>开屏广告</Text>
      </View>
    )
  }
}

export default OpenAdsScreen

import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SearchHeader from '../../component/SearchHeader'

export class index extends Component {
  render() {
    return (
      <View>
        <SearchHeader txt={'Categories'}/>
      </View>
    )
  }
}

export default index
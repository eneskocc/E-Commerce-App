import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class TxtWelcomeHeader extends Component {
  render() {
    return (
      <View style={{width:'100%',alignItems:'flex-start',marginVertical:25}}>
        <Text style={{fontSize:34,lineHeight:34,fontWeight:'700'}}>{this.props.txt}</Text>
      </View>
    )
  }
}

export default TxtWelcomeHeader
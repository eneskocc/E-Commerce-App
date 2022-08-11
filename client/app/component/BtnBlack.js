import { Text, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../config'

export class BtnBlack extends Component {
  render() {
    return (
      <TouchableOpacity style={{backgroundColor:colors.black,borderRadius:15,paddingHorizontal:15,paddingVertical:5,marginHorizontal:3,marginVertical:5}}>
        <Text style={{color:colors.white,fontSize:12,lineHeight:20,fontWeight:'600'}}>BtnBlack</Text>
      </TouchableOpacity>
    )
  }
}

export default BtnBlack
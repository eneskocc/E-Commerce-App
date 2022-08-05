import { Text, View ,TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
import { colors } from '../config'

export class BtnSocail extends Component {
  render() {
    return (
      <TouchableOpacity style={{backgroundColor:colors.white,width:90,paddingVertical:25,borderRadius:25,alignItems:'center',marginHorizontal:10}}>
       <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginHorizontal: 20,
          }}
          source={this.props.img}
        />
      </TouchableOpacity>
    )
  }
}

export default BtnSocail
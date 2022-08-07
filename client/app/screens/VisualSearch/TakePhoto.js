import { Text, View ,ImageBackground} from 'react-native'
import React, { Component } from 'react'
import BackHeader from '../../component/BackHeader'
import TakePhotoNavgation from '../../component/TakePhotoNavgation'

export class TakePhoto extends Component {
  render() {
    return (
      <View>
        <BackHeader
          txt={'Search by taking a photo'}
          onClick={() => this.props.navigation.goBack()}
        />
        <ImageBackground
          source={require('../../assets/images/Visual/image2.png')}
          resizeMode="cover"
          style={{height: '95%', justifyContent:'flex-end'}}>
       <TakePhotoNavgation />
        </ImageBackground>
      </View>
    )
  }
}

export default TakePhoto
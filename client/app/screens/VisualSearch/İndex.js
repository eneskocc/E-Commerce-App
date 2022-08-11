import {Text, View, ImageBackground} from 'react-native';
import React, {Component} from 'react';
import BackHeader from '../../component/BackHeader';
import Btn from '../../component/Btn';
import BtnTransparan from '../../component/BtnTransparan';
import { colors } from '../../config';
export class İndex extends Component {
  render() {
    return (
      <View>
        <BackHeader
          txt={'Visual Search'}
          onClick={() => this.props.navigation.goBack()}
        />
        <ImageBackground
          source={require('../../assets/images/Visual/image.png')}
          resizeMode="cover"
          style={{height: '95%', justifyContent: 'center'}}>
          <View style={{paddingHorizontal: '3%'}}>
            <Text
              style={{
                color: colors.white,
                fontSize: 40,
                lineHeight: 45,
                fontWeight:'400',
              }}>
              Search for an outfit by taking a photo or uploading an image
            </Text>
            <Btn
              txt={'TAKE A PHOTO'}
              onClick={() => this.props.navigation.navigate('TakePhoto')}
            />
            <BtnTransparan
              txt={'UPLOAD AN IMAGE'}
              onClick={() => this.props.navigation.navigate('Visual')}
              border={colors.black}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default İndex;

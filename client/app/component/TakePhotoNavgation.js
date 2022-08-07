import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class TakePhotoNavgation extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
          marginBottom: 75,
          paddingVertical: 30,
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginHorizontal:15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/Visual/flash.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginHorizontal:15,
            backgroundColor: colors.red,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={this.props.onClick}>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/Visual/camera.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginHorizontal:15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/Visual/sync.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TakePhotoNavgation;

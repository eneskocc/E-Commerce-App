import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class BtnGo extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          borderRadius: 25,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginVertical:10,
        }}
        onPress={this.props.onClick}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontWeight: '400',
          }}>
          {this.props.txt}
        </Text>
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
          }}
          source={require('../assets/images/home/go.png')}
        />
      </TouchableOpacity>
    );
  }
}

export default BtnGo;

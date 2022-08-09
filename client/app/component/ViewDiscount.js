import {Text, View} from 'react-native';
import React, {Component} from 'react';
import { colors } from '../config';

export class ViewDiscount extends Component {
  render() {
    return (
      <View  style={{
        backgroundColor: colors.red,
        borderRadius: 25,
        width:'30%',
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical:5,
        paddingHorizontal:5

      }}ƒ>
        <Text
          style={{
            color: colors.white,
            fontSize: 11,
            lineHeight: 11,
            fontWeight: '600',
          }}>
          {this.props.txt}
        </Text>
      </View>
    );
  }
}

export default ViewDiscount;

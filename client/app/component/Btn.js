import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class Btn extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: colors.red,
          width: '100%',
          paddingVertical: 10,
          borderRadius: 25,
          alignItems: 'center',
          marginVertical:10,
        }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 14,
            lineHeight: 20,
            fontWeight: '600',
          }}>
          {this.props.txt}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Btn;

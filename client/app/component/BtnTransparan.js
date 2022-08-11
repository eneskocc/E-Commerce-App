import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class BtnTransparan extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          paddingVertical: 10,
          borderRadius: 25,
          borderWidth:1,
          borderColor:this.props.border,
          alignItems: 'center',
          marginVertical: 10,
        }}
        onPress={this.props.onClick}>
        <Text
          style={{
            color: this.props.border,
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

export default BtnTransparan;

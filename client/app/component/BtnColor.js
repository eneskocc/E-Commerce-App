import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component, useState} from 'react';
import {colors} from '../config';

export class BtnColor extends Component {
  state = {
    isPress: false,
  };

  setIsPress = visible => {
    this.setState({isPress: visible});
  };
  render() {
    const {isPress} = this.state;
    var bg = this.props.color;
    var touchProps = {
      activeOpacity: 1,
      underlayColor: 'blue', // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => console.log('HELLO'), // <-- "onPress" is apparently required
    };
    return (
      <TouchableOpacity {...touchProps} onPress={() => this.setIsPress(true)}>
        <View
          style={{
            backgroundColor: this.props.color,
            width: 36,
            height: 36,
            borderRadius: 18,
          }}></View>
      </TouchableOpacity>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    borderColor: colors.red,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems:'center',
    justifyContent:'center'
  },
  btnPress: {
    borderColor: colors.red,
    borderWidth: 1,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default BtnColor;

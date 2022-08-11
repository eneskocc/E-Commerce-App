import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component, useState} from 'react';
import {colors} from '../config';

export class BtnSizes extends Component {
  state = {
    isPress: false,
    isPress1: false,
  };

  setIsPress = visible => {
    this.setState({isPress: visible,isPress1: visible});
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
    var touchProps2 = {
        activeOpacity: 1,
        underlayColor: 'blue', // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.txtPress : styles.txtNormal, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'), // <-- "onPress" is apparently required
      };
    return (
      <TouchableOpacity {...touchProps} onPress={() => this.setIsPress(true)}>
        <View
          style={{
            borderColor: colors.gray,
            borderWidth: 1,
            width: 36,
            height: 36,
            borderRadius: 10,
            justifyContent:'center',
            alignItems:'center',
          }}><TouchableOpacity  onPress={() => this.setIsPress(true)}><Text {...touchProps2} >{this.props.txt}</Text></TouchableOpacity></View>
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
    width: 36,
    height: 36,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
  },
  btnPress: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderColor: colors.white,
    backgroundColor:colors.red,
  },
  txtNormal: {
    
    color:colors.black,

  },
  txtPress: {
    color:colors.white,
  },
});

export default BtnSizes;

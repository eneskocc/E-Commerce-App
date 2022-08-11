import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class BtnCheckBox extends Component {
  state = {
    isPress: false,
    isPress1: false,
  };

  setIsPress = visible => {
    this.setState({isPress: visible, isPress1: visible});
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
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'space-between',width:'100%',alignItems:'center',marginVertical:10}}
        
        onPress={() => this.setIsPress(true)}>
        <Text {...touchProps2}>{this.props.txt}</Text>
        <View
          style={{
            
          }}
          {...touchProps}>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/home/Vector.png')}
          />
        </View>
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
    width: 30,
    height: 30,
    borderColor: colors.gray,
    backgroundColor:colors.white,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPress: {
    width: 30,
    height: 30,
    backgroundColor: colors.red,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNormal: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '600',
    color: colors.black,
  },
  txtPress: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '600',
    color: colors.red,
  },
});

export default BtnCheckBox;

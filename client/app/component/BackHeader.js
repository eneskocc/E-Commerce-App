import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export class BackHeader extends Component {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={this.props.onClick}>
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginHorizontal: 10,
          }}
          source={require('../assets/images/home/back.png')}
        />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default BackHeader;

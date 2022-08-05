import {Text, View, SafeAreaView, Image} from 'react-native';
import React, {Component} from 'react';

export class BackHeader extends Component {
  render() {
    return (
      <SafeAreaView>
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginHorizontal: 20,
          }}
          source={require('../assets/images/home/back.png')}
        />
      </SafeAreaView>
    );
  }
}

export default BackHeader;

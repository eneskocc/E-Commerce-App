import {Text, View, TextInput, Image} from 'react-native';
import React, {Component} from 'react';
import { colors } from '../config';

export class TextInputLogin extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 5,
          width: '100%',
          paddingHorizontal:15,
          paddingVertical:10,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize:11,lineHeight:11,color:colors.gray}}>Name</Text>
          <TextInput
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
          />
        </View>
        <Image
          source={require('../assets/images/home/tik.png')}
          style={{
            padding: 10,
            margin: 5,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
            alignItems: 'center',
          }}
        />
      </View>
    );
  }
}

export default TextInputLogin;

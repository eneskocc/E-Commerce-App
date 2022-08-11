import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import { colors } from '../config';

export class BackHeader extends Component {
  render() {
    return (
      <SafeAreaView style={{flexDirection:'row',backgroundColor:colors.white}}>
        <TouchableOpacity onPress={this.props.onClick}>
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginHorizontal: 10,
            marginBottom:15,
          }}
          source={require('../assets/images/home/back.png')}
        />
        </TouchableOpacity>
        <View style={{width:'80%',alignItems:'center'}}><Text style={{fontSize:18,lineHeight:22,fontWeight:'600'}}>{this.props.txt}</Text></View>
      </SafeAreaView>
    );
  }
}

export default BackHeader;

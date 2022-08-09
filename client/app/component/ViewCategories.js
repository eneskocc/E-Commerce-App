import {Text, View, TouchableOpacity,Image} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export default class ViewCategories extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: colors.white,
          width: '100%',
          borderRadius: 15,
          alignItems: 'center',
          marginVertical: 10,
          flexDirection:'row'
        }}>
        <Text
          style={{
              width:'50%',
              paddingHorizontal:20,
            fontSize: 24,
            lineHeight: 28,
            fontWeight: '700',
          }}>
          {this.props.txt}
        </Text>
       <View style={{width:'50%'}}>
       <Image
          style={{
            width: '100%',
            height: 100,
            borderTopRightRadius:15,
            borderBottomRightRadius:15,
          }}
          source={this.props.img}
        />
       </View>
      </TouchableOpacity>
    );
  }
}

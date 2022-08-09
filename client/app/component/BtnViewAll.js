import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export class BtnViewAll extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <View>
          <Text style={{fontSize: 34, lineHeight: 34,fontWeight:'600',marginVertical:5}}>{this.props.header}</Text>
          <Text style={{fontSize: 11, lineHeight: 11,marginVertical:5}}>{this.props.txt}</Text>
        </View>
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 11, lineHeight: 11}}>View all</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BtnViewAll;

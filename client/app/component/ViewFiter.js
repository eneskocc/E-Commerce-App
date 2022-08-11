import {Text, View, Image,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import { colors } from '../config';

export class ViewFiter extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row',justifyContent:'space-between',width:'100%',paddingVertical:5,backgroundColor:colors.AcikGray,marginVertical:10}}>
        <TouchableOpacity style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
          <Image
            source={require('../assets/images/filters/filter.png')}
            resizeMode="cover"
            style={{
              height: 25,
              width: 25,
            }}
          />
           <Text>Filters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
          <Image
            source={require('../assets/images/filters/swap.png')}
            resizeMode="cover"
            style={{
              height: 25,
              width: 25,
            }}
          />
          <Text>Price: lowest to high</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/filters/module.png')}
            resizeMode="cover"
            style={{
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ViewFiter;

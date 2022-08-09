import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Btn from './Btn';
import ViewDiscount from './ViewDiscount';
import {colors} from '../config';

export class ViewProduct extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
        <View style={{position: 'relative', top: 35, left: 5}}>
          <ViewDiscount txt={'-%20'} />
        </View>
        <Image
          source={this.props.img}
          resizeMode="cover"
          style={{
            height: 220,
            width: 160,
            borderRadius: 10,
            zIndex: -1,
          }}
        />
        <TouchableOpacity
          style={{
            position: 'relative',
            width: 46,
            height: 46,
            borderRadius: 23,
            justifyContent: 'center',
            alignItems: 'center',
            top: -25,
            left: 115,
            borderColor: colors.gray,
            borderWidth: 0.15,
            backgroundColor: colors.white,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
          }}>
          <Image
            source={require('../assets/images/product/favorite.png')}
            resizeMode="cover"
            style={{
              height: 25,
              width: 25,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <View style={{position: 'relative', top: -35}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/product/Star.png')}
              resizeMode="cover"
              style={{
                height: 14,
                width: 14,
                marginEnd: 3,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={require('../assets/images/product/Star.png')}
              resizeMode="cover"
              style={{
                height: 13,
                width: 14,
                marginEnd: 3,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={require('../assets/images/product/Star.png')}
              resizeMode="cover"
              style={{
                height: 14,
                width: 14,
                marginEnd: 3,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={require('../assets/images/product/Star.png')}
              resizeMode="cover"
              style={{
                height: 14,
                width: 14,
                marginEnd: 3,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={require('../assets/images/product/Star.png')}
              resizeMode="cover"
              style={{
                height: 14,
                width: 14,
                marginEnd: 3,
                resizeMode: 'contain',
              }}
            />
            <Text style={{color: colors.gray}}>(10)</Text>
          </View>
          <Text style={{fontSize:11,lineHeight:11,color: colors.gray,marginVertical:5}}>Dorothy Perkins</Text>
          <Text style={{fontSize:16,lineHeight:16}}>Evening Dress</Text>
        </View>
      </View>
    );
  }
}

export default ViewProduct;

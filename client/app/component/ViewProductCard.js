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

export class ViewProductCard extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.white,
          marginVertical: 10,
          borderRadius: 10,
        }}>
        <Image
          source={this.props.img}
          resizeMode="cover"
          style={{
            height: 150,
            width: 150,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
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
            top: 117,
            left: 162,
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
        <View style={{position: 'relative', top: 15, left: -30}}>
          <Text style={{fontSize: 16, lineHeight: 16, marginVertical: 5}}>
            Evening Dress
          </Text>
          <Text
            style={{
              fontSize: 11,
              lineHeight: 11,
              color: colors.gray,
              marginVertical: 5,
            }}>
            Dorothy Perkins
          </Text>

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

          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              marginVertical: 5,
              fontWeight: '700',
            }}>
            50$
          </Text>
        </View>
      </View>
    );
  }
}

export default ViewProductCard;

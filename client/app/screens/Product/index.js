import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import ShareHeader from '../../component/ShareHeader';
import DropDown from '../../component/DropDown';
import {colors} from '../../config';
import Btn from '../../component/Btn';

export class index extends Component {
  render() {
    return (
      <ScrollView>
        <ShareHeader txt={'Short dress'} />
        <ScrollView horizontal>
          <Image
            source={require('../../assets/images/home/img4.png')}
            resizeMode="cover"
            style={{
              height: 400,
              width: 260,
              resizeMode: 'contain',
              marginLeft: 5,
            }}
          />
          <Image
            source={require('../../assets/images/home/img4.png')}
            resizeMode="cover"
            style={{
              height: 400,
              width: 260,
              resizeMode: 'contain',
              marginLeft: 5,
            }}
          />
          <Image
            source={require('../../assets/images/home/img4.png')}
            resizeMode="cover"
            style={{
              height: 400,
              width: 260,
              resizeMode: 'contain',
              marginLeft: 5,
            }}
          />
        </ScrollView>
        <View
          style={{
            width: '100%',
            paddingHorizontal: '3%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <DropDown
            txt={'Arama tipini seçiniz'}
            first={'Mer’i'}
            second={'Mülga'}
          />
          <DropDown
            txt={'Arama tipini seçiniz'}
            first={'Mer’i'}
            second={'Mülga'}
          />
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',

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
              source={require('../../assets/images/product/favorite.png')}
              resizeMode="cover"
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '6%',
            width: '100%',
          }}>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontSize: 24,
                lineHeight: 28,
                fontWeight: '700',
                marginVertical: 5,
              }}>
              H&M
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
                source={require('../../assets/images/product/Star.png')}
                resizeMode="cover"
                style={{
                  height: 14,
                  width: 14,
                  marginEnd: 3,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={require('../../assets/images/product/Star.png')}
                resizeMode="cover"
                style={{
                  height: 13,
                  width: 14,
                  marginEnd: 3,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={require('../../assets/images/product/Star.png')}
                resizeMode="cover"
                style={{
                  height: 14,
                  width: 14,
                  marginEnd: 3,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={require('../../assets/images/product/Star.png')}
                resizeMode="cover"
                style={{
                  height: 14,
                  width: 14,
                  marginEnd: 3,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={require('../../assets/images/product/Star.png')}
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
          </View>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 28,
              marginVertical: 5,
              fontWeight: '700',
            }}>
            $19.99
          </Text>
        </View>
        <View style={{paddingHorizontal: '6%',paddingVertical:10,}}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              marginVertical:10
            }}>
            Short dress in soft cotton jersey with decorative buttons down the
            front and a wide, frill-trimmed square neckline with concealed
            elastication. Elasticated seam under the bust and short puff sleeves
            with a small frill trim.
          </Text>
          <Btn txt={'ADD TO CART'} />
        </View>
      </ScrollView>
    );
  }
}

export default index;

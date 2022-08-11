import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import BackHeader from '../../component/BackHeader';
import BtnColor from '../../component/BtnColor';
import {colors} from '../../config';
import BtnSizes from '../../component/BtnSizes';
import BtnCategory from '../../component/BtnCategory';
import SearchTextBox from '../../component/SearchTextBox';
import Btn from '../../component/Btn';
import BtnTransparan from '../../component/BtnTransparan';

export class Filter extends Component {
  render() {
    return (
      <View>
        <BackHeader
          txt={'Filters'}
          onClick={() => this.props.navigation.goBack()}
        />
        <View>
          <Text style={{marginHorizontal: 10, marginVertical: 10}}>Colors</Text>
          <View
            style={{
              backgroundColor: colors.white,
              paddingHorizontal: '4%',
              paddingVertical: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BtnColor color={colors.black} />
            <BtnColor color={colors.red} />
            <BtnColor color={colors.white1} />
            <BtnColor color={colors.white2} />
            <BtnColor color={colors.white3} />
            <BtnColor color={colors.mor} />
          </View>
        </View>
        <View>
          <Text style={{marginHorizontal: 10, marginVertical: 15}}>Sizes</Text>
          <View
            style={{
              backgroundColor: colors.white,
              paddingHorizontal: '4%',
              paddingVertical: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BtnSizes txt={'XS'} />
            <BtnSizes txt={'S'} />
            <BtnSizes txt={'M'} />
            <BtnSizes txt={'L'} />
            <BtnSizes txt={'XL'} />
          </View>
        </View>
        <View>
          <Text style={{marginHorizontal: 10, marginVertical: 15}}>
            Category
          </Text>
          <View
            style={{
              backgroundColor: colors.white,
              paddingHorizontal: '4%',
              paddingVertical: 15,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <BtnCategory txt={'ALL'} />
            <BtnCategory txt={'WOMEN'} />
            <BtnCategory txt={'MEN'} />
            <BtnCategory txt={'BOYS'} />
            <BtnCategory txt={'GIRLS'} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Brand')}
          style={{
            marginHorizontal: 10,
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 16, lineHeight: 16, marginBottom: 10}}>
              Brand
            </Text>
            <Text style={{fontSize: 11, lineHeight: 11, color: colors.gray}}>
              adidas Originals, Jack & Jones, s.Oliver
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/home/arrow.png')}
              resizeMode="cover"
              style={{
                height: 35,
                width: 35,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{paddingHorizontal: '4%', flexDirection: 'row',justifyContent:'space-between',marginVertical:20,}}>
          <View style={{width:'45%'}}>
            <BtnTransparan txt={'Discard'} border={colors.black}/>
          </View>
          <View style={{width:'45%'}}>
            <Btn txt={'Apply'} />
          </View>
        </View>
      </View>
    );
  }
}

export default Filter;

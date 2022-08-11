import {Text, View} from 'react-native';
import React, {Component} from 'react';
import BackHeader from '../../component/BackHeader';
import SearchTextBox from '../../component/SearchTextBox';
import BtnCheckBox from '../../component/BtnCheckBox';
import BtnTransparan from '../../component/BtnTransparan';
import Btn from '../../component/Btn';
import { colors } from '../../config';

export class Brand extends Component {
  render() {
    return (
      <View>
        <BackHeader
          txt={'Brand'}
          onClick={() => this.props.navigation.goBack()}
        />
        <SearchTextBox />
        <View style={{paddingHorizontal: '4%'}}>
          <BtnCheckBox txt={'adidas'} />
          <BtnCheckBox txt={'adidas Originals'} />
          <BtnCheckBox txt={'Blend'} />
          <BtnCheckBox txt={'Boutique Moschino'} />
          <BtnCheckBox txt={'Champion'} />
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <View style={{width: '45%'}}>
            <BtnTransparan txt={'Discard'} border={colors.black} />
          </View>
          <View style={{width: '45%'}}>
            <Btn txt={'Apply'} />
          </View>
        </View>
      </View>
    );
  }
}

export default Brand;

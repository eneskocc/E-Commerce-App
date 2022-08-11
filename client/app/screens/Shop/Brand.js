import {Text, View} from 'react-native';
import React, {Component} from 'react';
import BackHeader from '../../component/BackHeader';
import SearchTextBox from '../../component/SearchTextBox';

export class Brand extends Component {
  render() {
    return (
      <View>
        <BackHeader txt={'Brand'} />
        <SearchTextBox />
      </View>
    );
  }
}

export default Brand;

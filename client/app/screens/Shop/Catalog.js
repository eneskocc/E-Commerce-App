import {Text, View} from 'react-native';
import React, {Component} from 'react';
import SearchHeader from '../../component/SearchHeader';
import ViewFiter from '../../component/ViewFiter';
import { colors } from '../../config';
import ViewTags from '../../component/ViewTags';

export class Catalog extends Component {
  render() {
    return (
      <View>
        <SearchHeader />
        <View style={{paddingHorizontal: '4%',backgroundColor:colors.white}}>
          <ViewTags />
          <ViewFiter />
        </View>
      </View>
    );
  }
}

export default Catalog;

import {ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import SearchHeader from '../../component/SearchHeader';
import ViewFiter from '../../component/ViewFiter';
import {colors} from '../../config';
import ViewTags from '../../component/ViewTags';
import ViewProductCard from '../../component/ViewProductCard';

export class Catalog extends Component {
  render() {
    return (
      <View>
        <SearchHeader />
        <View style={{paddingHorizontal: '4%', backgroundColor: colors.white}}>
          <ViewTags />
          <ViewFiter />
        </View>
        <View style={{paddingHorizontal: '4%'}}>
          <ScrollView>
            <ViewProductCard
              img={require('../../assets/images/product/img1.png')}
              index={1}
            />
            <ViewProductCard
              img={require('../../assets/images/product/img2.png')}
              index={2}
            />
            <ViewProductCard
              img={require('../../assets/images/product/img3.png')}
              index={3}
            />
            <ViewProductCard
              img={require('../../assets/images/product/img2.png')}
              index={4}
            />
            <ViewProductCard
              img={require('../../assets/images/product/img3.png')}
              index={5}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Catalog;

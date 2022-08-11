import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import ViewCategories from '../../component/ViewCategories';
import {colors} from '../../config';

export class ShopHome extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: '3%', alignItems: 'center'}}>
        <ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: colors.red,
              width: '100%',
              paddingVertical: 20,
              borderRadius: 15,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 24,
                lineHeight: 28,
                fontWeight: '700',
              }}>
              SUMMER SALES
            </Text>
            <Text
              style={{
                color: colors.white,
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
              }}>
              Up to 50% off
            </Text>
          </TouchableOpacity>
          <ViewCategories
            txt={'New'}
            img={require('../../assets/images/shop/image41.png')}
            onClick={() => this.props.navigation.navigate('Catalog')}
            index={1}
          />
          <ViewCategories
            txt={'Clothes'}
            img={require('../../assets/images/shop/image.png')}
            onClick={() => this.props.navigation.navigate('Catalog')}
            index={2}
          />
          <ViewCategories
            txt={'Shoes'}
            img={require('../../assets/images/shop/image2.png')}
            onClick={() => this.props.navigation.navigate('Catalog')}
            index={3}
          />
          <ViewCategories
            txt={'Accesories'}
            img={require('../../assets/images/shop/image3.png')}
            onClick={() => this.props.navigation.navigate('Catalog')}
            index={4}
          />
        </ScrollView>
      </View>
    );
  }
}

export default ShopHome;

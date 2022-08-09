import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import SearchHeader from '../../component/SearchHeader';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../../config';
import ViewCategories from '../../component/ViewCategories';
function HomeScreen() {
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
        />
        <ViewCategories
          txt={'Clothes'}
          img={require('../../assets/images/shop/image.png')}
        />
        <ViewCategories
          txt={'Shoes'}
          img={require('../../assets/images/shop/image2.png')}
        />
        <ViewCategories
          txt={'Accesories'}
          img={require('../../assets/images/shop/image3.png')}
        />
      </ScrollView>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
export class index extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <SearchHeader txt={'Categories'} />
        <Tab.Navigator>
          <Tab.Screen name="Women" component={HomeScreen} />
          <Tab.Screen name="Men" component={SettingsScreen} />
          <Tab.Screen name="Kids" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default index;

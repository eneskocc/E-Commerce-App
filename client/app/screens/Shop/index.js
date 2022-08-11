import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import SearchHeader from '../../component/SearchHeader';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../../config';
import ViewCategories from '../../component/ViewCategories';
import ShopHome from './ShopHome';

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
          <Tab.Screen name="Women" component={ShopHome} />
          <Tab.Screen name="Men" component={SettingsScreen} />
          <Tab.Screen name="Catalog" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default index;

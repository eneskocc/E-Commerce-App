import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
//Home
import Home from './Home';
import Shop from './Shop';
import Catalog from './Shop/Catalog';
import ShopHome from './Shop/ShopHome';
import SearchHeader from '../component/SearchHeader';

export const HomeStack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();
export const ShopStack = createNativeStackNavigator();
function ShopStackScreen({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <SearchHeader txt={'Categories'} />
      <Tab.Navigator>
        <Tab.Screen name="Women" component={ShopHome} />
        <Tab.Screen name="Men" component={ShopHome} />
        <Tab.Screen name="Kids" component={ShopHome} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export const Shop2Stack = createNativeStackNavigator();

function Shop2StackScreen({navigation}) {
  return (
    <Shop2Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Shop2Stack.Screen name="Search" component={Home} />
    </Shop2Stack.Navigator>
  );
}
export const SorularStack = createNativeStackNavigator();

function SorularStackScreen({navigation}) {
  return (
    <SorularStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SorularStack.Screen name="Question" component={Home} />
    </SorularStack.Navigator>
  );
}

export const GuncelStack = createNativeStackNavigator();

function GuncelStackScreen({navigation}) {
  return (
    <GuncelStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GuncelStack.Screen name="Current" component={Home} />
    </GuncelStack.Navigator>
  );
}

export {
  HomeStackScreen,
  ShopStackScreen,
  Shop2StackScreen,
  SorularStackScreen,
  GuncelStackScreen,
};

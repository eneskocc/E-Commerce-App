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
import Filter from './Shop/Filter';
import Brand from './Shop/Brand';
import Product from './Product';

export const HomeStack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Product" component={Product} />
    </HomeStack.Navigator>
  );
}

export const ShopStack = createNativeStackNavigator();
function ShopStackScreen({navigation}) {
  return (
    <ShopStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <ShopStack.Screen name="Shop" component={Catalog} />
    <ShopStack.Screen name="Filter" component={Filter} />
    <ShopStack.Screen name="Brand" component={Brand} />
    <ShopStack.Screen name="Product" component={Product} />
  </ShopStack.Navigator>
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

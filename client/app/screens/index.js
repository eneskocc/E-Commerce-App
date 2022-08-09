import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Home
import Home from './Home';
import Shop from './Shop';

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

export const ShopStack = createNativeStackNavigator();

function ShopStackScreen({navigation}) {
  return (
    <ShopStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ShopStack.Screen name="Shop" component={Shop} />
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

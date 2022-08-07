import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Anasayfa
import Anasayfa from './Anasayfa';

export const AnasayfaStack = createNativeStackNavigator();

function AnasayfaStackScreen({navigation}) {
  return (
    <AnasayfaStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AnasayfaStack.Screen name="Home" component={Anasayfa} />
    </AnasayfaStack.Navigator>
  );
}

export const AramaStack = createNativeStackNavigator();

function AramaStackScreen({navigation}) {
  return (
    <AramaStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AramaStack.Screen name="Search" component={Anasayfa} />
    </AramaStack.Navigator>
  );
}
export const Arama2Stack = createNativeStackNavigator();

function Arama2StackScreen({navigation}) {
  return (
    <Arama2Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Arama2Stack.Screen name="Search" component={Anasayfa} />
    </Arama2Stack.Navigator>
  );
}
export const SorularStack = createNativeStackNavigator();

function SorularStackScreen({navigation}) {
  return (
    <SorularStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SorularStack.Screen name="Question" component={Anasayfa} />
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
      <GuncelStack.Screen name="Current" component={Anasayfa} />
    </GuncelStack.Navigator>
  );
}

export {
  AnasayfaStackScreen,
  AramaStackScreen,
  Arama2StackScreen,
  SorularStackScreen,
  GuncelStackScreen,
};

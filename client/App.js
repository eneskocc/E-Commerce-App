import * as React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './app/redux/store';
import {Provider} from 'react-redux';

//Tab Screens
import {
  AnasayfaStackScreen,
  AramaStackScreen,
  SorularStackScreen,
  GuncelStackScreen,
} from './app/screens';

import {colors} from './app/config';
import Login from './app/screens/Welcome/Login';
import Register from './app/screens/Welcome/Register';
import ForgotPassword from './app/screens/Welcome/ForgotPassword';
import VisualSearch from './app/screens/VisualSearch/İndex';
import TakePhoto from './app/screens/VisualSearch/TakePhoto';
const Tab = createBottomTabNavigator();

const TabScreens = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Anasayfa"
        component={AnasayfaStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('./app/assets/images/bottom/home.png')
              : require('./app/assets/images/bottom2/home.png');
            return <Image style={{width: 25, height: 25}} source={image} />;
          },
        }}
      />
      <Tab.Screen
        name="Arama"
        component={AramaStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('./app/assets/images/bottom/search.png')
              : require('./app/assets/images/bottom2/search.png');
            return <Image style={{width: 25, height: 25}} source={image} />;
          },
        }}
      />
      <Tab.Screen
        name="Sorular"
        component={SorularStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('./app/assets/images/bottom/ask.png')
              : require('./app/assets/images/bottom2/ask.png');
            return <Image style={{width: 25, height: 25}} source={image} />;
          },
        }}
      />
      <Tab.Screen
        name="Guncel"
        component={GuncelStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('./app/assets/images/bottom/book.png')
              : require('./app/assets/images/bottom2/book.png');
            return <Image style={{width: 25, height: 25}} source={image} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Visual" component={VisualSearch} />
          <Stack.Screen name="TakePhoto" component={TakePhoto} />
          <Stack.Screen name="TabScreens" component={TabScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import BackHeader from '../../component/BackHeader';
import Btn from '../../component/Btn';

export class Login extends Component {
  render() {
    return (
      <View>
        <BackHeader />
        <View style={{paddingHorizontal: '3%'}}>
          <Btn txt={'SIGN UP'}/>
        </View>
      </View>
    );
  }
}

export default Login;

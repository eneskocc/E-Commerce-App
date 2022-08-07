import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import BackHeader from '../../component/BackHeader';
import Btn from '../../component/Btn';
import BtnSocail from '../../component/BtnSocail';
import BtnGo from '../../component/BtnGo';
import TxtWelcomeHeader from '../../component/TxtWelcomeHeader';
import TextInputLogin from '../../component/TextInputLogin';

export class Login extends Component {
  render() {
    return (
      <View>
        <BackHeader />
        <View style={{paddingHorizontal: '3%'}}>
          <TxtWelcomeHeader txt={'Login'} />
          <TextInputLogin txt={'Email'} content={'Enter Your Name Here'} />
          <TextInputLogin txt={''} content={'Enter Your Password Here'} />
          <BtnGo txt={'Forgot your password?'} />
          <Btn txt={'LOGIN'} />
        </View>
        <View style={{alignItems: 'center', paddingVertical: 10}}>
          <Text style={{fontSize: 14, lineHeight: 20, fontWeight: '500'}}>
            Or sign up with social account
          </Text>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              paddingVertical: 10,
            }}>
            <BtnSocail img={require('../../assets/images/home/facebook.png')} />
            <BtnSocail img={require('../../assets/images/home/google.png')} />
          </View>
        </View>
      </View>
    );
  }
}

export default Login;

import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import BackHeader from '../../component/BackHeader';
import Btn from '../../component/Btn';
import BtnSocail from '../../component/BtnSocail';
import BtnGo from '../../component/BtnGo';
import TxtWelcomeHeader from '../../component/TxtWelcomeHeader';

export class Login extends Component {
  render() {
    return (
      <View>
        <BackHeader />
        <View style={{paddingHorizontal: '3%'}}>
            <TxtWelcomeHeader txt={'Sign up'}/>
            <BtnGo txt={'Already have an account?'}/>
          <Btn txt={'SIGN UP'} />
        </View>
        <View style={{alignItems:'center',paddingVertical:10}}>
            <Text style={{fontSize:14,lineHeight:20,fontWeight:'500'}}>Or sign up with social account</Text>
        <View style={{justifyContent: 'center', flexDirection: 'row',paddingVertical:10}}>
          <BtnSocail img={require('../../assets/images/home/facebook.png')} />
          <BtnSocail img={require('../../assets/images/home/google.png')} />
        </View>
        </View>
      </View>
    );
  }
}

export default Login;

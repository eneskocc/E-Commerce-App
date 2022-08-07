import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import BackHeader from '../../component/BackHeader';
import Btn from '../../component/Btn';
import BtnSocail from '../../component/BtnSocail';
import BtnGo from '../../component/BtnGo';
import TxtWelcomeHeader from '../../component/TxtWelcomeHeader';
import TextInputForgotPassword from '../../component/TextInputLogin';

export class ForgotPassword extends Component {
  render() {
    return (
      <View>
        <BackHeader  onClick={() => this.props.navigation.goBack()}/>
        <View style={{paddingHorizontal: '3%'}}>
          <TxtWelcomeHeader txt={'Forgot Password'}/>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '400',
            }}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
          <TextInputForgotPassword
            txt={'Email'}
            content={'Enter Your Name Here'}
          />
          <Btn txt={'SEND'} />
        </View>
      </View>
    );
  }
}
export default ForgotPassword;

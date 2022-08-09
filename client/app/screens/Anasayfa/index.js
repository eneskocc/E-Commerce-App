import {Text, View, ImageBackground, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Btn from '../../component/Btn';
import {colors} from '../../config';
import BtnViewAll from '../../component/BtnViewAll';
import ViewProduct from '../../component/ViewProduct';

export class index extends Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/home/banner.png')}
          resizeMode="cover"
          style={{
            height: 600,
            justifyContent: 'flex-end',
            resizeMode: 'contain',
          }}>
          <View style={{paddingRight: '45%', paddingLeft: '5%'}}>
            <Text
              style={{
                color: colors.white,
                fontSize: 48,
                lineHeight: 48,
                fontWeight: '800',
              }}>
              Fashion sale
            </Text>
            <Btn
              txt={'Check'}
              onClick={() => this.props.navigation.navigate('TakePhoto')}
            />
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: '4%', backgroundColor: colors.white}}>
          <BtnViewAll header={'New'} txt={'You’ve never seen it before!'}/>
          <ScrollView horizontal>
<ViewProduct />
<ViewProduct />
<ViewProduct />
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default index;

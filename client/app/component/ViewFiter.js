import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';
import BtnCategory from './BtnCategory';
import Btn from './Btn';

export class ViewFiter extends Component {
  state = {
    modalVisible: false,
    modalVisible1: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  setModalVisible1 = visible1 => {
    this.setState({modalVisible1: visible1});
  };
  render() {
    const {modalVisible} = this.state;
    const {modalVisible1} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingVertical: 5,
          backgroundColor: colors.AcikGray,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={this.props.onClick}>
          <Image
            source={require('../assets/images/filters/filter.png')}
            resizeMode="cover"
            style={{
              height: 25,
              width: 25,
            }}
          />
          <Text>Filters</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.setModalVisible1(true)}>
          <Image
            source={require('../assets/images/filters/swap.png')}
            resizeMode="cover"
            style={{
              height: 25,
              width: 25,
            }}
          />
          <Text>Price: lowest to high</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <Image
            source={require('../assets/images/filters/module.png')}
            resizeMode="cover"
            style={{
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              position: 'relative',
              bottom: '-32%',
             
            }}>
            <View
              style={{
                width: '100%',
                paddingBottom:50,
                backgroundColor: 'white',
                borderRadius: 30,
                padding: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Pressable
                style={{
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                
                }}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Image
                  source={require('../assets/images/product/cizgi.png')}
                  resizeMode="cover"
                  style={{
                    height: 10,
                    width: 100,
                    borderRadius: 10,
                  }}
                />
              </Pressable>

              <Text style={{marginBottom: 15, textAlign: 'center'}}>
              Select size
              </Text>
              <View
            style={{
              backgroundColor: colors.white,
              paddingHorizontal: '4%',
              paddingVertical: 15,
              width:'100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <BtnCategory txt={'XS'} />
            <BtnCategory txt={'S'} />
            <BtnCategory txt={'M'} />
            <BtnCategory txt={'L'} />
            <BtnCategory txt={'XL'} />
          </View>
          <Btn txt={'ADD TO CART'} />
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible1(!modalVisible1);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              position: 'relative',
              bottom: '-32%',
             
            }}>
            <View
              style={{
                width: '100%',
                paddingBottom:50,
                backgroundColor: 'white',
                borderRadius: 30,
                padding: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Pressable
                style={{
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                
                }}
                onPress={() => this.setModalVisible1(!modalVisible1)}>
                <Image
                  source={require('../assets/images/product/cizgi.png')}
                  resizeMode="cover"
                  style={{
                    height: 10,
                    width: 100,
                    borderRadius: 10,
                  }}
                />
              </Pressable>

              <Text style={{marginBottom: 15, textAlign: 'center'}}>
                Sort By
              </Text>
              <View style={{alignItems:'flex-start',width:'100%'}}>
              <Text style={{marginVertical: 15,marginStart:10 }}>
              Popular
              </Text>
              <Text style={{marginVertical: 15,marginStart:10 }}>
              Newest
              </Text>
              <Text style={{marginVertical: 15,marginStart:10 }}>
              Customer review
              </Text>
              <Text style={{marginVertical: 15,marginStart:10 }}>
              Price: lowest to high
              </Text>
              <Text style={{marginVertical: 15,marginStart:10 }}>
              Price: highest to low
              </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ViewFiter;

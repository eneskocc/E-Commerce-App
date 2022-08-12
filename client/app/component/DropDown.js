import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { colors } from '../config';

export class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: this.props?.select ? this.props.select : '',
    };
  }
  selection(data) {
    this.setState({open: false, selected: data});
    if (this.props?.selectionAction) {
      this.props.selectionAction(data);
    }
  }

  render() {
    return (
      <View style={{height: this.state.open ? 150 : 60, zIndex: 5,width:'40%'}}>
        <TouchableOpacity
          onPress={() => this.setState({open: !this.state.open})}
          style={[
            {
              width: '100%',
              paddingLeft: '5%',
              paddingRight: '5%',
              justifyContent: 'space-between',
              marginTop: '3%',
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              height: 50,
              borderRadius: 4,
              borderBottomLeftRadius: this.state.open ? 0 : 10,
              borderBottomRightRadius: this.state.open ? 0 : 10,
              zIndex: 5,
            },
            this.props.styles,
          ]}>
          <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
            {this.state.selected ? (
              <Text style={{fontSize: 12, marginLeft: '10%'}}>
                {this.state.selected}
              </Text>
            ) : (
              <Text style={{fontSize: 12, marginLeft: '2%',color:colors.txtGray}}>{this.props.txt}</Text>
            )}
           
          </View>
          <Image
              source={require('../assets/images/home/dropdown.png')}
              style={{height: 20, width: 15, resizeMode: 'contain'}}
            />
        </TouchableOpacity>
        {this.state.open && (
          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              marginTop: 50,
              zIndex: 2,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.selection(this.props.first)}
              style={{
                padding: 10,
                marginBottom: 5,
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 17 }}>{this.props.first}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selection(this.props.second)}
              style={{
                padding: 10,
                marginBottom: 5,
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 17 }}>{this.props.second}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selection(this.props.second)}
              style={{
                padding: 10,
                marginBottom: 5,
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 17 }}>{this.props.second}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selection(this.props.second)}
              style={{
                padding: 10,
                marginBottom: 5,
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 17 }}>{this.props.second}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}



export default DropDown;
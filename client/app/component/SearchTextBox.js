import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

class SearchTextBox extends Component {
  render() {
    return (
      <View style={styles.SectionStyle}>
        <TouchableOpacity onPress={this.props.onClick}>
          <Image
            source={require('../assets/images/home/Search.png')}
            style={styles.ImageStyle}
          />
        </TouchableOpacity>
        <TextInput
          style={{flex: 1}}
          placeholder="Arama yapın..."
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '95%',
    padding: 9,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 5,
    width: 5,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});

export default SearchTextBox;

import {Dimensions, } from 'react-native';


const {width, height} = Dimensions.get('window');
const screen = {
  width,
  height,
};

const apiUrl='https://myapp.herokuapp.com'; 

const colors = {
    red:'#DB3022',
    white:'#ffffff',
    gray:'#9B9B9B',
    AcikGray:'#F9F9F9'
};



export {
  screen,
  colors,
  apiUrl,
};
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
    black:'#222222',
    gray:'#9B9B9B',
    AcikGray:'#F9F9F9',
    white1:'#F6F6F6',
    white2:'#BEA9A9',
    white3:'#E2BB8D',
    mor:'#151867',
    
};



export {
  screen,
  colors,
  apiUrl,
};
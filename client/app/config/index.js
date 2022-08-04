import {Dimensions, } from 'react-native';


const {width, height} = Dimensions.get('window');
const screen = {
  width,
  height,
};

const apiUrl='https://myapp.herokuapp.com'; 

const colors = {
    red:'#E01C3B',
    tabGray:'#C7C5C5',
    buttonGray:'#A9A9A9',
    placeholderGray:'#969393',
    white:'#FFFFFF',
    darkblue:'#35495E',
    balck:'#000000',
    txtGray:'#8B8989',
    txtGri:'#AFAFAF',
    txtGriAcik:'#9E9E9E',
    orange:'#FF6B00',
    acikRed:'#FFE4E4',
};



export {
  screen,
  colors,
  apiUrl,
};
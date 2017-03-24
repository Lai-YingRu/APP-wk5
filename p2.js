// Import libraries for making a component
import React from 'react';
import { View, Image,StatusBar,Text } from 'react-native';
import Header from './src/components/header';
import Nav from './src/components/nav';
import Gameinfo from './src/components/gameinfo';
const p2 = () =>{

const {
    nav,navbtn,
  } = styles;

    return(

        <View>
        <StatusBar barStyle="light-content"/> 

     <Header />
     <Nav />
     <Gameinfo />
        </View>
    );
};


export default p2;
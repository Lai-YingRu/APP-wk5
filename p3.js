// Import libraries for making a component
import React from 'react';
import { View, Image,StatusBar } from 'react-native';
import Search from './src/components/search';
import List from './src/components/list';
import Bar from './src/components/bar';

const p3 = () =>{

    return(

        <View>
        <StatusBar barStyle="light-content"/> 
        <Search /> 
        <List/>
        <Bar />
        </View>
    );
};


export default p3;
// Import libraries for making a component
import React from 'react';
import { View, Image } from 'react-native';

const p1 = () =>{
    const { back,pic } = styles;

    return(

        <View style={[back]}>
            <Image
            style={[pic]}
                source={require('./src/Asset/logo_twitch.png')}
            />
        </View>
    );
};

const styles={
    pic:{
        width: 185.5,
        height: 61.5,
        
    },
    back:{
        flex:1,
        backgroundColor:'rgb(100,65,165)',
        alignItems: 'center',
        justifyContent: 'center',
    }

};

export default p1;

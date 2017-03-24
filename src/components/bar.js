import React from 'react';
import { View,Image,Text } from 'react-native';

const bar = () => {
      const {
    container,row,img,text,line,bar
  } = styles;

    return (
        <View style={container}>
         <View style={line}></View>
         <View style={bar}>
            <View style={row}>
             <Image source={require('../Asset/btn_games_selected.png')}
              style={img}/>
              <Text style={text}>Games</Text>
            </View>
            <View style={row}>
              <Image source={require('../Asset/btn_channels.png')}
              style={img}/>
              <Text style={text}>Channels</Text>
            </View>     
            <View style={row}>     
              <Image source={require('../Asset/btn_following.png')}
              style={img}/>
              <Text style={text}>Fllowing</Text>
            </View>     
            <View style={row}>    
              <Image source={require('../Asset/btn_me.png')}
              style={img}/>
              <Text style={text}>Me</Text>
            </View> 
            </View>
        </View>
    );
};

const styles = {
    container:{
    height:49.5,
    width:375,
    },
    bar:{
   flexDirection:'row',
    },
    line:{
   height:0.5,
   width:375,
   backgroundColor:'rgba(0,0,0,0.2)',
    },
    img:{
      height:49,
      width:94,

    },
    row:{
    height:49,
    width:94,
    // flexDirection:'column',
    },
    text:{
    fontSize:10,
    textAlign:'center',
    color:'rgb(187,187,187)',
    marginTop:-14,
  }

  
};


 export default bar;

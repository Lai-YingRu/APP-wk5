// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
// Make a component
const  header = () => {
 
  const {
    textstyle,viewStyle,backbtn,like
  } = styles;

    return (
      <View style={viewStyle}> 
        
          <Image source={require('../Asset/btn_back.png')}
          style={backbtn}/>
          <Text style={textstyle}>Hearthstone</Text>
          
          <Image source={require('../Asset/btn_like.png')}
          style={like}/>

      </View>
    );
};

styles={
viewStyle:{
    backgroundColor:'rgb(100,65,165)',
    height:64,
    flexDirection:'row',
},

textstyle:{
  fontSize:18,
  color:'rgb(255,255,255)',
  marginLeft:92,
  marginTop:30.5,
},
backbtn:{
  height:33,
  width:33,
  marginTop:25,
  marginLeft:8.5,
},
like:{
  height:33,
  width:33,
  marginTop:25,
  marginLeft:92,
}

};


// Make the component available to other parts of the app
export default header;


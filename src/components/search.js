// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const  search = () => {
 
  const {
    textStyle, viewStyle,searchbar,searchimg,textstyle,cast
  } = styles;

    return (
      <View style={viewStyle}> 
        <View style={searchbar}>
          <Image source={require('../Asset/icon_search.png')}
          style={searchimg}/>
          <Text style={textstyle}>Search</Text>
          
        </View>
     <Image source={require('../Asset/btn_cast.png')}
          style={cast}/>
      </View>
    );
};

styles={
viewStyle:{
    backgroundColor:'rgb(100,65,165)',
    height:64,
    flexDirection:'row',
},
searchimg:{
height:18,
width:18,

},

textstyle:{
  fontSize:15,
  color:'rgb(185,163,227)',
  paddingLeft:5.5,
  
},
searchbar:{
  marginLeft:8.5,
  marginTop:26.5,
  marginRight:5,
  paddingTop:6,
  paddingLeft:11,
  borderRadius:5,
  height:30,
  width:320,
  backgroundColor:'rgb(49,31,83)',
  flexDirection:'row',
},
cast:{
  height:33,
  width:33,
  marginTop:25,

}

};


// Make the component available to other parts of the app
export default search;

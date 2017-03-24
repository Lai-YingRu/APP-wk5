// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
// Make a component
const  nav = () => {
 
  const {
    nav,navbtn,indicator,bar,barindicator
  } = styles;

    return (
      <View style={nav}> 
        <View>
          <Text style={[navbtn,indicator]}>LIVE</Text>
          <View style={bar}></View>
       </View>

          <Text style={navbtn}>RECENT</Text>

      </View>
    );
};

const styles={
nav:{
 height:44,
 flexDirection:'row',
 paddingTop:15,
},

navbtn:{
  fontSize:13,
  color:'rgb(187,187,187)',
  
  width:187.5,
  textAlign:'center',

},

bar:{
backgroundColor:'rgb(100,65,165)',
height:5,
width:187.5,
top:8.5,
},

indicator:{
  color:'rgb(100,65,165)',

},
};

// Make the component available to other parts of the app
export default nav;
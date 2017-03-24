// Import libraries for making a component
import React from 'react';
import { Text, View,Image } from 'react-native';


// Make a component
const  gameinfo = () => {
 
  const {
    container,row,img,img3
  } = styles;

    return (
      <View style={container}>

        <View style={row}>
            <Image source={require('../Asset/img_firebat.png')}
              style={img}/>
            <Image source={require('../Asset/img_forsen.png')}
              style={img}/>
      
            <Image source={require('../Asset/img_kolento.png')}
              style={img3}/>
        </View>

      </View>

    );
};

const styles={

container:{
    backgroundColor:'rgb(241,241,241)',
    padding:5,
    paddingBottom:0,
    flexDirection:'column',
},
img:{
    height:200,
    width:365,
    marginBottom:5,
},
img3:{
    height:144,
    width:365,
}
};




// Make the component available to other parts of the app
export default gameinfo;


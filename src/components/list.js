// Import libraries for making a component
import React from 'react';
import { View ,Image} from 'react-native';

// Make a component
const  list = () => {
 
  const {
    container,row,img
  } = styles;

    return (
      <View style={container}>

        <View style={row}>
            <Image source={require('../Asset/img_leagueoflegends.png')}
              style={img}/>
            <Image source={require('../Asset/img_counterstrike.png')}
              style={img}/>
        </View>
      
        <View style={row}>
            <Image source={require('../Asset/img_hearthstone.png')}
              style={img}/>
            <Image source={require('../Asset/img_dota2.png')}
              style={img}/>
        </View>
      
        <View style={row}>
            <Image source={require('../Asset/img_h1z1.png')}
              style={img}/>
            <Image source={require('../Asset/img_destiny.png')}
              style={img}/>
        </View>

      </View>
    );
};

const styles={

container:{
    backgroundColor:'rgb(241,241,241)',
    height:554,
    flexDirection:'column',
    margin:0
},
img:{
    height:180,
    width:180,
    marginLeft:5,
},
row:{
    
    height:180,
    flexDirection:'row',
    marginTop:5,
}

};




// Make the component available to other parts of the app
export default list;

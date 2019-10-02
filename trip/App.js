/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';
import AppNavigator from './images/AppNavigator';

const trips = [
  {name:"Heaven on Earth",
    img:require("./images/default.jpg"), 
    locations:"Lonavala",
  startDate:'27/09/19',
  endDate:"22/22/22",
  buddies:["abc,xttz","hac"],
  bills:[],
  budget:1000  
},
{name:"Paradise Island",
  img:require("./images/wonderland.jpg"), 
locations:"abc",
startDate:'27/09/19',
endDate:"22/22/22",
buddies:["abc,xttz","hac"],
bills:[],
budget:1000  
},
{name:"Drogon's pit",
  img:require("./images/Dragonpit.jpg"), 
    locations:"abc",
  startDate:'27/09/19',
  endDate:"22/22/22",
  buddies:["abc,xttz","hac"],
  bills:[],
  budget:1000  
},
{name:"Heaven on Earth",
  img:require("./images/default.jpg"), 
    locations:"abc",
  startDate:'27/09/19',
  endDate:"22/22/22",
  buddies:["abc,xttz","hac"],
  bills:[],
  budget:1000  
},
];
 trip= (trips)=>{

  return(
      <Text>
      {trips[0].locations}
      </Text>
  )
}

export default class App extends Component {
  render(){
  return(
  <AppNavigator screenProps={{trips:trips}} navigation={this.props.navigation}/>
  );
}
};

const styles = StyleSheet.create({

});


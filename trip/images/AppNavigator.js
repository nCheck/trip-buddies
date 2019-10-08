import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import{Icon} from 'native-base'
import home from '../home'
import friendTrips from '../friendTrips'
import Headerr from '../components/Headerr'
import Activity from '../components/Activity'
import newtrip from "../components/newtrip"
import myTrips from '../components/myTrips';
import {createDrawerNavigator} from 'react-navigation-drawer'
import Drawer from '../components/Drawer'
import DisplayTrip from '../components/DisplayTrip'
import LoginView from '../components/Login';
import SignUpView from '../components/Register';

const AppNavigator = createStackNavigator(
    {   Home:{screen:home},

  Login : { screen : LoginView },
  Register : { screen : SignUpView },
    friendTrips:friendTrips,
    Activity:Activity,
    Newtrip:newtrip,
          Notrip:myTrips,
    DisplayTrip:DisplayTrip
},
    // {
    //     defaultNavigationOptions: {
    //     headerStyle: {
    //       backgroundColor: '#f4516c',
    //     },
    //     headerTitle:<Headerr/>, 
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //     },
      
    //   },},
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft:( 
          <Icon type="FontAwesome5" name={"bars"} brand style={{paddingLeft:15 , fontSize: 30, color:'#fad369'}} onPress={() => navigation.toggleDrawer()}/>
        ),
        headerTitle:<Headerr/>,
      headerStyle:{
        color:'#fad369',
          backgroundColor: "#1787ff",

      },
        headerTintColor: '#fff',

      };
    },    
  }

);
const a=createDrawerNavigator({
  AppNavigator:{
    screen:AppNavigator,
    navigationOptions:{
      drawerLabel:()=>null
    }
  },
  Login : { screen : LoginView },
  Home:home,
  Register : { screen : SignUpView },
  Trip:{
    screen:myTrips,
    navigationOptions:{
      drawerIcon:<Icon type="AntDesign" name="tago" style={{color:'red'}} />,
      drawerLabel:"My trips"
    }

  },
  AddTrip:{
screen:newtrip,
navigationOptions:{
  drawerIcon:<Icon type="MaterialIcons" name="add-circle"style={{color:'red'}} />
},
  },
  friendTrips:{
    screen:friendTrips,
navigationOptions:{
  drawerLabel:()=>null
}
},
DisplayTrip:{
  screen:DisplayTrip,
navigationOptions:{
  drawerLabel:()=>null
}
},
},
{
  drawerBackgroundColor:'#f0f0e9',
contentComponent: Drawer

},
)

export default createAppContainer(a)

import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
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
import Request from '../components/Request'
import MakeMyTrip from '../components/Makemytrip';
import Logout from '../components/Logout'

const Authenticate=createStackNavigator({
  Login:LoginView,
  Register:SignUpView,

},{
  defaultNavigationOptions: ({navigation}) => {
    return {
    
      headerTitle:<Headerr/>,
    headerStyle:{
      color:'#fad369',
        backgroundColor: "#1787ff",

    },
      headerTintColor: '#fff',

    };
     
}
})
const AppNavigator = createStackNavigator(
    {  
      Home:{screen:home},

      Newtrip:newtrip,
  Register : { screen : SignUpView },
  MakeMyTrip : { screen : MakeMyTrip },
    FriendTrips:friendTrips,
    Activity:Activity,
    MyTrips:myTrips,
    DisplayTrip:DisplayTrip,
    Request:Request
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
  // Login : { screen : LoginView,
  // navigationOptions:{
  //   drawerIcon:<Icon type="FontAwesome" name="sign-in" style={{color:"red"}}/>
  // } },
  Home:{screen:home,
  navigationOptions:{
    drawerLabel:"Recommendations",
    drawerIcon:<Icon type="Entypo" name="tripadvisor" style={{color:'red',width:'100%'}} />,

  }},
//   Register : { screen : SignUpView,
//   navigationOptions:{
//  drawerIcon:<Icon type="FontAwesome5" name="registered" style={{color:'red'}} />,

//   } },
  MyTrips:{
    screen:myTrips,
    navigationOptions:{
      drawerIcon:<Icon type="AntDesign" name="tago" style={{color:'red'}} />,
      drawerLabel:"My trips"
    }

  },
  Newtrip:{
screen:newtrip,
navigationOptions:{
  drawerLabel:"Add trip",
  drawerIcon:<Icon type="MaterialIcons" name="add-circle"style={{color:'red'}} />
},
  },
  FriendTrips:{
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
Request:{
  screen:Request,
  navigationOptions:{
    drawerLabel:'Trip requests',
    
    drawerIcon:<Icon type="FontAwesome5" name="place-of-worship"style={{color:'red'}} />
  }
},
Logout:{
  screen:Logout,
  navigationOptions:{
  drawerIcon:<Icon type="AntDesign" name="logout"  style={{  marginLeft:25,height:40,width:50 ,color:'red'}}/>
}
}  
},
{
  drawerBackgroundColor:'#f0f0e9',
contentComponent: Drawer

},
)
const Switcher=createSwitchNavigator({

  Authenticate:Authenticate,
  Authenticated:a,

})

export default createAppContainer(Switcher)

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base';
class Headerr extends Component {
    render() {
        return (
            <View style={{flexDirection:'row',}}>
                <Icon type="FontAwesome5" name= "calendar-week" style={{color:'#fad369'}} />
                <Text style={{fontFamily:"Roboto_medium",fontSize:20,color:'white'}}> Trip Buddy </Text>
            </View>
        )
    }
}
export default Headerr
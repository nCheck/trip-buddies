import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
    import { form } from 'tcomb-form-native/lib'
    const routes = [
        'as','bs','cd'
      ];
const Drawer = props=>( 


            <View>
                <DrawerNavigatorItems
                {...props}
         activeBackgroundColor={'black'}
         activeTintColor={'#fad369'}
         
/> 
            </View>
    
)

export default Drawer

import React, { Component } from 'react'
import {  View,ScrollView  } from 'react-native'
var t = require('tcomb-form-native');
import { withNavigation } from 'react-navigation';

import {Button,Text} from 'native-base'
var Form = t.form.Form;
 var trip=t.struct({

    name : t. String,
    location : t.String,
     
    startDate : t.Date,
    endDate:t.Date,   
    buddies : t.list(t.String) ,
    budget : t.Number
 })

 var values={
     name:"Lakhan",
     location:"Bhutan",
     buddies:["KJo","BJo"],
     budget:20
 }
 
export default class newtrip extends Component {
    Submit=()=>{
   
            const value=this.refs.form.getValue()
            console.log("sd",value)
       
         }
    options={
        fields:{
            startDate:{
                label:"Start Date",
                mode:'date',
            
            },
            endDate:{
                    label:"End Date",
                    mode:'date'
                   
                },
            buddies:{
                label:"Add friends" 
            }
            
            
        }
    }
    render() {
        return (
            <ScrollView>
                <Form
                ref="form"
                options={this.options}
                type={trip}
                value={values}
                />
                 <Button    rounded light style={{justifyContent:'center'}}  onPress={this.Submit} underlayColor='yellow'>
          <Text  >Save</Text>
        </Button >
            </ScrollView>
        )
    }
}


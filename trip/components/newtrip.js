import React, { Component } from 'react';
import {  View,ScrollView,Picker  } from 'react-native';
var t = require('tcomb-form-native');
import moment from 'moment';
import {Button,Text} from 'native-base';

var Form = t.form.Form;
 var trip=t.struct({

    name : t. String,
    location : t.String,
     
    startDate : t.Date,
    endDate:t.Date,   
    buddies : t.list(t.String) ,
    budget : t.Number
 });

 var values={
     name:"Lakhan",
     location:"Bhutan",
     buddies:["KJo","BJo"],
    startDate:new Date("2014-05-22"),
    endDate: new  Date("2014-05-25"),
     budget:20
 };

export default class newtrip extends Component {
    
    state={
        selectedItems:[],
        friends:[
                "ABC",
                "CDE",
                "XYZ",
                "Q",
                "PQR",
                "J"

        ]
    }
    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };
    Submit=()=>{
   
            const value=this.refs.form.getValue()
            console.log("sd",value)
            this.props.navigation.navigate('DisplayTrip',{i:value})
         }
    options={
        fields:{
            startDate:{
                label:"Start Date",
                mode:'date',
                config: {
                    format: (date) => {
                      return moment(date).format('DD-MM-YYYY');
                    },
                
               
                },
            
            },
            endDate:{
                    label:"End Date",
                    mode:'date',
                    config: {
                        format: (date) => {
                          return moment(date).format('DD-MM-YYYY');
                        },
                    
                
                    },
                },
            buddies:{
                label:"Add friends" 
            }
            
            
        }
    }
    render() {
        const {selectedItems}=this.state;
        return (
            <ScrollView>
                  <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
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


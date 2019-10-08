import React, { Component } from 'react';
import {  View,ScrollView,Picker, StyleSheet  } from 'react-native';
var t = require('tcomb-form-native');
import ImagePicker from "react-native-image-picker";
import moment from 'moment';
import {Button,Text} from 'native-base';

var Form = t.form.Form;
 var trip=t.struct({

    name : t. String,
    location : t.String,
    drive_url : t.String,
    img_url : t.String,
    startDate : t.Date,
    endDate:t.Date,   
    buddies : t.list(t.String) ,
    budget : t.Number
 });

 var values={
    name:"Lakhan",
    location:"Bhutan",
    buddies:["KJo","BJo"],
    drive_url:"",
    img_url:"",
    startDate:new Date("2018-05-22"),
    endDate: new Date("2018-05-25"),
    budget:2000
 };

export default class newtrip extends Component {
    
    state={
        language:'',
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
    
    getPhotos = async () => {
        ImagePicker.showImagePicker({}, response => {
            var fd = new FormData();

            fd.append("image", {
            uri: response.uri,
            type: "image/jpeg",
            name: response.fileName
            });

            this.setState({
            path : response.path,
            uri : response.uri,
            fd
            });
            
        });
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
            <View style={styles.container}>
                <ScrollView>
                    
                    <Form
                    ref="form"
                    options={this.options}
                    type={trip}
                    value={values}
                    />
                    
                    <Button    rounded light style={{justifyContent:'center'}}  onPress={this.Submit} underlayColor='yellow'>
                        <Text >Save</Text>
                    </Button >
                </ScrollView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      margin : 20
    }
});
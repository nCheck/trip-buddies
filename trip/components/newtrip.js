import React, { Component } from 'react';
import {  View,ScrollView,Picker, StyleSheet , PermissionsAndroid , Image } from 'react-native';
var t = require('tcomb-form-native');
import ImagePicker from "react-native-image-picker";
import moment from 'moment';
import {Button,Text} from 'native-base';
import axios from 'axios'
import IP from '../data/ip';
import IMGUR from '../data/imgur';

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
    
    constructor(props){
        super(props);
        this.state={
            language:'',
            selectedItems:[],
            drive_url:"",
            img_url:"",
            uri : false,
            friends:[
                    "ABC",
                    "CDE",
                    "XYZ",
                    "Q",
                    "PQR",
                    "J"
    
            ]
        }
        this.getPhotos = this.getPhotos.bind(this);
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };
    
    async componentWillMount(){

        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'Cool Photo App Camera Permission',
                message:
                  'Cool Photo App needs access to your camera ' +
                  'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('You can use the camera');
            } else {
              console.log('Camera permission denied');
            }
          } catch (err) {
            console.warn(err);
          }

    }

    getPhotos = async () => {
        var ts = this;
        try {

            ImagePicker.showImagePicker({}, response => {
                var fd = new FormData();
                var uri = response.uri;
                fd.append("file", {
                uri: response.uri,
                type: "image/jpeg",
                name: response.fileName
                });
                console.log(response)
                axios({
                    method: "post",
                    url: IMGUR,
                    data: fd,
                    config: { headers: { "content-type": "multipart/form-data" } }
                  })
                    .then(function(response) {
                      //handle success
                      var img_url = response.data.link;
                      console.log("[DATA]", img_url);
                      ts.setState({img_url,uri});
                      console.info("STATE", ts.state);
        
                    })
                    .catch(function(response) {
                      //handle error
                      console.log("[RESPONSE: ]", response);
        
                    });
    
    
    
                
            });

        }
        catch (err){
            console.error(err);
        }
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
                    <Button    rounded style={{justifyContent:'center'}} color='#5cc6ff'  onPress={this.getPhotos} >
                        <Text >Select Cover Image</Text>
                    </Button >
                    {
                        this.state.uri != false &&
                        <Image style={{margin:10, alignContent : 'center' , width: 300, height: 300 }}
                                source={{ uri : this.state.uri }}
                        />
                    }                    
                    <Button    rounded style={{justifyContent:'center', marginTop : 10}} color='#4dc1ff'  onPress={this.Submit}>
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
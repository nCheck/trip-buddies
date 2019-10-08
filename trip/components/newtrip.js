import React, { Component } from 'react';
import {  View,ScrollView,Picker, StyleSheet ,Image ,Text,TextInput,TouchableOpacity,FlatList} from 'react-native';
var t = require('tcomb-form-native');
import ImagePicker from "react-native-image-picker";
import moment from 'moment';
import axios from 'axios'
import IP from '../data/ip';
import IMGUR from '../data/imgur';

import {Button,Card,CardItem,Thumbnail,Right,Body} from 'native-base';
var Form = t.form.Form;
 var trip=t.struct({

    name : t. String,
    location : t.String,
    drive_url : t.String,
    img_url : t.String,
    startDate : t.Date,
    endDate:t.Date,   
    budget : t.Number
 });

 var values={
    name:"Lakhan",
    location:"Bhutan",
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
    
            ],
            newFriend:""

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
            this.props.navigation.navigate('DisplayTrip',{i:value,friends:this.state.friends})
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
            
            
        }
    }
    removeFriend(d){
        var f= this.state.friends;
        var c=f.findIndex(a=>a===d);
        console.log(c);
        delete f[c];
        this.setState({friends:f})
    }
    addFriend(d){
        console.log(d)
    var f=this.state.friends
    f.push(d)
    this.setState({friends:f,newFriend:""})
    }
    render() {
        const {selectedItems}=this.state;
        return (
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
          <Text style={styles.text}>Add your friends</Text>
                    <FlatList
                    data={this.state.friends}
                    keyExtractor={(item, index) => index}
                    renderItem={i => {
                      return(
                      <View> 
                      
                      <Card>
                    <CardItem style={styles.cardItem}> 
                        <Thumbnail source={require('../images/f1.jpeg')}/>
                        <Body>
                  <Text>{i.item}</Text>
                </Body>
                <Right style={{flexDirection:'row' ,justifyContent:'space-between'}}>
          <TouchableOpacity onPress={()=>this.removeFriend(i.item)} style={styles.removeButton}>
            <Text style={styles.text}>Remove</Text>
          </TouchableOpacity>
          </Right>
                    </CardItem>
                    </Card>

                      
                           </View> 
                       );}}/>
                        <TextInput value={this.state.newFriend} onChangeText={(value)=>this.setState({newFriend:value})} placeholder="Add friend"/>

                       <TouchableOpacity onPress={()=>this.addFriend(this.state.newFriend)} style={styles.button}><Text style={styles.text} >Add friend</Text></TouchableOpacity>
                    <Button    rounded light style={{justifyContent:'center'}}  onPress={this.Submit} underlayColor='yellow'>
                        <Text >Save</Text>
                    </Button >
                </ScrollView>
            
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      margin : 20
    },
    text:{
        fontFamily:'Roboto_medium',
        fontSize:16,
        color:'black',
        alignSelf:'center',
        margin:10
        
    },
    cardItem:{
        backgroundColor:'ghostwhite',
        marginBottom:10,
        borderColor:'black',
        borderWidth:2
    },
   itemList:{ 
   

     fontSize:16,   
      marginBottom:3},

    button:{
        borderWidth:2,
        padding:2,
        borderRadius:5,
        borderColor:'blue',
        color:'green',
        alignItems:'center',
        width:'50%'
    },
    removeButton:{
        borderWidth:1,
        borderColor:'red',
        padding:10,
        borderRadius:3,
        
    }
});
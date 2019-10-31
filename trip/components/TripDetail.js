import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class TripDetail extends Component {

    constructor(props){
        super(props);
        var trip = this.props.navigation.getParam('trip', {});
    
        this.state = {
            trip : trip
        }
    }

    _formatDate = (date)=>{
        var today = new Date(date);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        
        var yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd;
        } 
        if (mm < 10) {
          mm = '0' + mm;
        } 

        return dd+'/'+mm+'/'+yyyy;
    }

    _formatArray = (arr) =>{

        var str = "";

        for(var a of arr){
            str += a + " , ";
        }

        var ans = str.slice(0, str.length-2)

        if ( arr.length == 1 ){
            return "Buddy "  + ans;
        }

        return  "Buddies " +  str.slice(0, str.length-2);

    }

    handleClick = (url) => {
        url = "https://drive.google.com/open?id=19jgSe6lxx7ArxTW3-4KDtmaJt0SAKLaX";
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log("Don't know how to open URI: " + url);
          }
        });
      };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.state.trip.img_url}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}> { this.state.trip.name } </Text>
              <Text style={styles.info}> From: { this._formatDate(this.state.trip.startDate) }  To: { this._formatDate(this.state.trip.endDate) } </Text>
              <Text style={styles.description}> With your { this._formatArray(this.state.trip.buddies) } </Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={ () => this.handleClick( this.state.trip.drive_url ) } >
                <Text>Open Drive</Text>  
              </TouchableOpacity>              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:20,
    alignSelf:'center',
    position: 'absolute',
    marginTop:60
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
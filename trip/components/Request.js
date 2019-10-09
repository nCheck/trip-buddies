import React, { Component } from 'react';
import { Text, View,StyleSheet ,TouchableOpacity, AsyncStorage , Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Icon, Left, Body, Right } from 'native-base';
import axios from 'axios'
import IP from '../data/ip';

export default class Request extends Component {
    static navigationOptions={
        headerTitle:"Requests"
    }

    constructor(props) {
        super(props);
        this.state = {
          username   : 'demo',
          trips : []
        }
        this._renderItem = this._renderItem.bind(this);
        this._onAccept = this._onAccept.bind(this);
        this._onReject = this._onReject.bind(this);
      }

    async componentWillMount(){
        var userData =  JSON.parse( await AsyncStorage.getItem('user') );
        console.log(userData)
        this.setState({ username : userData.username, password : userData.password , trips : userData.requests });
        var requests = this.state.trips.length;
        console.log(requests)
        Alert.alert("Notification", "You have "+ requests.toString() + " pending requests" );
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

    _onAccept = async (username,tripid) =>{
        console.info("username",username,"tripid",tripid);

        await axios.get( IP + `/user/${username}/${tripid}`)
                    .then( res => console.info("UPDATE", res.data) )
                    .catch(err => console.error(err));

        axios.get(IP+`/verify/${ this.state.username }/${ this.state.password }`)
        .then( async (res) =>{
            console.log("response", res.data);
            if ( res.data.status == true ){
            await AsyncStorage.setItem('user' ,  JSON.stringify( res.data.data ) );
            this.props.navigation.navigate('Home');
            }
            else{
            Alert.alert('Invalid Password',"Please enter correct details");
            }
        })
        .catch(err => console.log("[ERROR]",err));
    }

    _onReject = async (username,tripid) =>{

        console.info("username",username,"tripid",tripid);

        await axios.get( IP + `/reject/${username}/${tripid}`)
                    .then( res => console.info("UPDATE", res.data) )
                    .catch(err => console.error(err));

        axios.get(IP+`/reject/${ this.state.username }/${ this.state.password }`)
        .then( async (res) =>{
            console.log("response", res.data);
            if ( res.data.status == true ){
            await AsyncStorage.setItem('user' ,  JSON.stringify( res.data.data ) );
            this.props.navigation.navigate('Home');
            }
            else{
            Alert.alert('Invalid Password',"Please enter correct details");
            }
        })
        .catch(err => console.log("[ERROR]",err));

    }

    _renderItem = (item,key) =>{
        var username = this.state.username;
        var startDate = item.startDate;
        return (
            <CardItem style={styles.cardItem} key={key}> 
            <Thumbnail source={{uri : item.img_url}}/>
            <Body>
            <Text>   {item.name}</Text>
            <Text>   {item.location}</Text>
            <Text note>  Date : {this._formatDate(startDate)} </Text>
            </Body>
            <Right style={{flexDirection:'row' ,justifyContent:'space-between'}}>
            <TouchableOpacity style={styles.buttonA} onPress={()=>this._onAccept(username,item._id)} >
            <Text style={styles.text}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.buttonB} onPress={()=>this._onReject(username,item._id)} >
            <Text style={styles.text}>Reject</Text>
            </TouchableOpacity>
            </Right>
            </CardItem>
        )


    }

    render() {
        var d = this.state.trips;
        return (
            <Container>

                <Card>
                    {
                        d.map( (item,key) => this._renderItem(item,key) )
                    }
                </Card>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    cardItem:{
        marginBottom:10,
        borderColor:'black',
        borderWidth:2
    },
    text:{
        fontFamily:'Roboto_medium',
        fontSize:16,
        color:'black'
    },
   
    buttonA:{
        borderWidth:2,
        padding:2,
        borderRadius:5,
        borderColor:'green',
        color:'green'
    },
    buttonB:{
        borderWidth:2,
        padding:2,
        borderRadius:5,
        borderColor:'red',
        
    }
})

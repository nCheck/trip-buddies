import React, { Component } from 'react';
import { 
    View,Image,Dimensions ,StyleSheet, AsyncStorage, TouchableOpacity
} from 'react-native';
import{Card ,CardItem,Container,Body,Header,Subtitle,Title,Button,Text} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import {ENTRIES1} from '../data/imglist';
import { withNavigation } from 'react-navigation';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;


export default class myTrips extends Component {


    constructor(props) {
        super(props);
        this.state = {
          username   : 'demo',
          trips : []
        }
        this._renderItem = this._renderItem.bind(this);
      }

    async componentWillMount(){
        var userData =  JSON.parse( await AsyncStorage.getItem('user') );
        console.log(userData)
        this.setState({ username : userData.username , trips : userData.trips })
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

        return str.slice(0, str.length-2);

    }

    _renderItem ({item, index}) {
        return (
            <View>
            <View style={{backgroundColor:'black', justifyContent:'center',alignItems:'center',     borderRadius:15,}} >
                <Image source={{uri:item.img_url}}  style={{ alignSelf:'center', width: 250, height: 200 }}/>
                     
                <Text  style={styles.cardText} >{item.name}</Text>
               <Text style={styles.subText}> With your buddies { this._formatArray(item.buddies) } </Text>
               <Text style={styles.subText}> From: { this._formatDate(item.startDate) }  To: { this._formatDate(item.endDate) } </Text>
    
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={ () => this.props.navigation.navigate('TripDetail', { trip : item }) } >
                <Text>View More</Text>  
              </TouchableOpacity>  

            </View>
        );
    }
    render() {
        console.log(this.state,"mystate")
        return (
                <Container >
                
                    <Carousel                  
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.trips}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    // contentContainerCustomStyle={{paddingVertical:10}}
                    containerCustomStyle={{marginTop:15}}
                    // autoplay={true}
                    itemWidth={itemWidth}/>
                
            <Card style={styles.card}>
                <CardItem style={styles.cardItem}>


                    <Button  transparent  onPress={()=>this.props.navigation.navigate("Newtrip")} >
                    <Text style={{fontFamily:'Caladea-BoldItalic'}} >
                        Add your trip
                    </Text>
                    </Button>
                </CardItem>
            </Card>
                </Container>

        )
    }
}


const styles=StyleSheet.create({
    card:{

        margin:10,
        backgroundColor:"#8c8c88",
        width:itemWidth,
        justifyContent:'center',
        alignSelf:'center'
    },
    cardItem:{
        justifyContent:'center',
        borderColor:'white',
        borderWidth:4,
    },
    cardText:{
    
        paddingTop:10,
        fontFamily:'Roboto_medium',
        fontSize:18,
        borderTopColor:'white',
        backgroundColor:'black',
        color:'white',
        width:250
    },
    subText:{
    
        paddingTop:10,
        borderTopWidth:1,
        fontFamily:'Roboto_medium',
        fontSize:12,
        borderTopColor:'white',
        backgroundColor:'black',
        color:'white',
        width:250
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
      }
})

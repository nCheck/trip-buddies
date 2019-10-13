import React, { Component } from 'react';
import {  View,FlatList ,Image,Picker, WebView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import AppNavigator from './images/AppNavigator';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'
import IP from './data/ip';

export default class home extends Component {
  state={Filter:false}
constructor(props){
  super(props)
  this.showFilter=this.showFilter.bind(this)
  this.start = {
    places : []
  }
  console.log("sd")

}

  async componentWillMount(){
    console.log("IP",IP)
    axios.get(IP+'/places')
      .then( res =>{
        var places = res.data.data;
        console.info("DATA" , places)
        this.setState({places});
      })
      .catch( err => console.error("network",err) )

  }

  static navigationOptions = ({navigation})=>{
    const {params={}}=navigation.state;
    return{
    headerTitle:"Recommended trips",
    
    headerRight:(
      <Icon onPress={()=>params.showFiltr()} style={{color:"#fad369"}}  type="MaterialCommunityIcons" name="filter-outline"/>
            )
    }
          } 

          showFilter(){
            console.log("picker")
            this.setState({Filter:true})
            console.log(this.state.Filter)

            return(    <RNPickerSelect
            placeholder={{label:'Select trip location',value:null,color:'yellow'}}
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Football', value: 'football' },
                  { label: 'Baseball', value: 'baseball' },
                  { label: 'Hockey', value: 'hockey' },
              ]}
          />)

}
  componentDidMount() {
    this.props.navigation.setParams({
        showFiltr: this.showFilter
    });
}
filterClose(v){
  this.setState({Filter:false})
  console.log("closing filter ",this.state.Filter)
}
startLoad = (s)=>{
    console.log("making cards",s);
      if(s){
      return(
        
            <FlatList 
              numColumns={1}
              data = {s}
              keyExtractor={(item, index) => index}
              renderItem={i => {
                console.log(i);
                return(
                    <View>
                    
                    <Card>
                <CardItem>
                  <Left>
                    
                    <Thumbnail source={  i.index%2 == 0 ? require('./images/green.png'):require('./images/iconfinder_circle_red_10282.png')} />
                    <Body>
    
                      <Text style={{fontFamily:"Beyond Wonderland", fontSize:18 ,color:'#0c420c'}}>{i.item.title} </Text>
                      <Text note>{i.item.location}</Text>
    
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody  >
                  <Image source={{uri : i.item.illustration}} style={{height: 200, width: null, flex: 1}  }/>
                </CardItem>
                <CardItem>
  
                  <Body>
                   
                    <Text style={{fontFamily:"ALBAS___"}}>
                     { i.item.subtitle }
                    </Text>
    
                  
                        </Body>
                        <Right><Button onPress={()=>this.props.navigation.navigate('MakeMyTrip',{dest : i.item.location})} >
                          <Icon type="FontAwesome" name="arrow-right" />
                       </Button></Right>
                 
                </CardItem>
              </Card>
              </View>
                );}}
            />
      )}
          else
          {
            return(
            <View>
            <Text>Add a new trip</Text>
            </View>
            )
          }
          
      
                }
  
    render() {
    // var  d=undefined
    var places = this.state.places;

      return(
        <Container>
          {this.state.Filter &&    <RNPickerSelect
            onValueChange={(value) => this.filterClose(value)}
            items={[
                { label: 'Adventure', value: 'Adventure' },
                { label: 'Historical', value: 'Historical' },
                { label: 'Beaches', value: 'Beaches' },
                { label: 'Museums', value: 'Museums' },

            ]}/>}
       

          
          {this.startLoad(places)}
          
        </Container>
        );
    }
}

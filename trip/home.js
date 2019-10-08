import React, { Component } from 'react';
import {  View,FlatList ,Image,Picker} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import AppNavigator from './images/AppNavigator';
import RNPickerSelect from 'react-native-picker-select';

export default class home extends Component {
  state={Filter:false}
constructor(props){
  super(props)
  this.showFilter=this.showFilter.bind(this)
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
  start(s){
    console.log(s);
      if(s){
      return(
        
            <FlatList 
              numColumns={1}
              data = {s}
              keyExtractor={(item, index) => index}
              renderItem={i => {
                return(
                    <View>
                    
                    <Card>
                <CardItem>
                  <Left>
                    
                    <Thumbnail source={  i.index==0? require('./images/green.png'):require('./images/iconfinder_circle_red_10282.png')} />
                    <Body>
    
                      <Text style={{fontFamily:"Beyond Wonderland", fontSize:18 ,color:'#0c420c'}}>{i.item.name} </Text>
                      <Text note>{i.item.locations}</Text>
    
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody  >
                  <Image source={i.item.img} style={{height: 200, width: null, flex: 1}  }/>
                </CardItem>
                <CardItem>
  
                  <Body>
                   
                    <Text style={{fontFamily:"ALBAS___"}}>
                     A  4 day trip to Highlands
                    </Text>
    
                  
                        </Body>
                        <Right><Button onPress={()=>this.props.navigation.navigate('friendTrips',{i:i.item})} >
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
    var d=this.props.screenProps.trips

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
       

          
          {this.start(d)}
          
        </Container>
        );
    }
}

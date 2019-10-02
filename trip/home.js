import React, { Component } from 'react'
import {  View,FlatList ,Image} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import AppNavigator from './images/AppNavigator'
export default class home extends Component {


  start(s){
    console.log(s)
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
          {this.start(d)}
        </Container>
        );
    }
}

import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail,  Icon, Left, Body, Right } from 'native-base';

export default class Request extends Component {
    static navigationOptions={
        headerTitle:"Requests"
    }
    render() {
        return (
            <Container>

                <Card>
                    <CardItem style={styles.cardItem}> 
                        <Thumbnail source={require('../images/f1.jpeg')}/>
                        <Body>
                  <Text>Jeff</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
                <Right style={{flexDirection:'row' ,justifyContent:'space-between'}}><TouchableOpacity style={styles.buttonA}>
            <Text style={styles.text}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonB}>
            <Text style={styles.text}>Reject</Text>
          </TouchableOpacity>
          </Right>
                    </CardItem>
                    <CardItem style={styles.cardItem}>
                        <Thumbnail source={require('../images/f2.png')}/>
                        <Body>

                  <Text>Jane</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
                <Right style={{flexDirection:'row' ,justifyContent:'space-between'}}><TouchableOpacity style={styles.buttonA}>
            <Text style={styles.text}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonB}>
            <Text style={styles.text}>Reject</Text>
          </TouchableOpacity>
          </Right>
                    </CardItem>
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

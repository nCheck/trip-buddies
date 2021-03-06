import React, { Component } from 'react';
import { Text, View,FlatList,StyleSheet } from 'react-native';
import { Content,Form,Item,Input,Label } from 'native-base';

export default class Activity extends Component {

  state={
    friends:this.props.navigation.getParam('friends')
  }
  

    render() {
        var act=this.props.navigation.getParam('act');
console.log("frieds ",this.state.friends)
        return (
            <Content>
                <Text> Form for activiy {act.n}</Text>
                <Form >
            <Item floatingLabel>
              <Label>Money spent</Label>
              <Input />
            </Item>
            <View style={styles.co}>
<Text style={styles.text}>Name </Text> 
<Text style={styles.text} >Contribution</Text>

            </View>
            <FlatList 
              numColumns={1}
              data = {this.state.friends}
              keyExtractor={(item, index) => index}
              renderItem={i => {
                return(
                  <Item style={styles.co}>

                  <Text style={{fontFamily:"Beyond Wonderland", fontSize:18 ,color:'#0c420c' ,width:'50%'}}>{i.item} </Text>
               <Item>   
              <Input />
              </Item>
                  </Item>

                )}}
                />
          </Form>
            </Content>
        )
    }
}
const styles=StyleSheet.create({
  co:{
    flexDirection:'row',
    width:'75%'
  },
  text:{
    width:'50%',
    fontSize:20
  }
})

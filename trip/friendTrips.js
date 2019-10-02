import React, { Component } from 'react'
import { Button,Text, View ,FlatList,TouchableOpacity ,} from 'react-native'
var t = require('tcomb-form-native');
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';
import Modal from "react-native-modal";
import withNavigation from 'react-navigation'

class friendTrips extends Component {
    state={
        modalvisible:false,
        icons:[
            {       
                n:"Train",
                type:"FontAwesome5",
                name:"train"
            },
            {
                n:"Car",
                type:"FontAwesome5",
                name:"car",
            },
            { 
                n:"Coffee",
                type:"FontAwesome",
                name:"coffee"
            },
            {   n:"Shopping",
                type:"FontAwesome",
                name:"shopping-cart"
            },
            {   n:"Ship",
                type:"MaterialIcons",
                name:"directions-boat"
            },
            {   n:"Food",
                type:"MaterialCommunityIcons",
                name:"food-fork-drink"
            },
            {   n:"Entertainment",
                type:"MaterialIcons",
                name:"movie"
            },
            {   n:"Flight",
                type:"MaterialIcons",
                name:"flight-takeoff"
            },
            {   n:"Accomodation",
                type:"FontAwesome",
                name:"home"
            },


            

        ]
    }

   showForm(s){
    this.setState({modalvisible:false})
   this.props.navigation.navigate("Newtrip  ",{act:s})        
    console.log("form click ")
    }

    render() {
        
        const {navigation}=this.props
        const i =navigation.getParam('i')
        return(
            <View>
                
                <Text> friendTrips {i.name} </Text>
                <Text> View you Friends trip here in detail</Text>
                <Button title="Add trip" onPress={()=>this.setState({modalvisible:true})}/>
              
                <Modal 
                style={{}}
                isVisible={this.state.modalvisible} 
                onRequestClose={() => {
                    this.setState({modalvisible:false}) }}   
                 animationType="slide"
                 animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          onBackdropPress={()=>this.setState({modalvisible:false})}
              >
<View style={{ 
    backgroundColor: 'white',
    padding: 22,
    height:270,
    justifyContent:'space-between', 
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
    }} >
<FlatList
          extraData={this.state}

                numColumns={3}
                data={this.state.icons}
                keyExtractor={(item, index) =>index.toString()}
                renderItem={i=>{
                    return(
                       <View style={{  flex:1 ,height:75}}>
                           <TouchableOpacity  onPress={()=>this.showForm(i.item)} >
                                <Icon   active style={{alignSelf:'center' } }type={i.item.type} name={i.item.name} />
                                <Text style={{alignSelf:'center', fontFamily:'Roboto_medium'}}>{i.item.n}   </Text>
                                </TouchableOpacity>
                        </View>
                    )
                }}/>
</View>

                </Modal>
            
                </View>
        )
    } 
}

export default friendTrips
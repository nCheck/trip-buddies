import React, { Component } from 'react'
import {  View,StyleSheet,Image ,Dimensions,ImageBackground,FlatList,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Accordion, Button,Icon} from 'native-base';
var {height,width}=Dimensions.get('window')
import moment from 'moment';
import Modal from "react-native-modal";

export default class DisplayTrip extends Component {
    constructor(props){
        super(props)
        this._renderComponent=this._renderComponent.bind(this)
    }

    showForm(s){
        this.setState({modalvisible:false})
       this.props.navigation.navigate("Activity",{act:s,i:this.state.i})        
        console.log("form click ")
        }
    state={
        modalvisible:false,
        tasks:[],
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
        ],
        i:{}
    }
    componentWillMount(){
        var tasks=[]
        var i=this.props.navigation.getParam('i')
        this.setState({i})
        var d=moment(i.startDate,"DD")
        d=parseInt(d.format("DD"))
        var e=moment(i.endDate,"DD-MM-YYY").subtract(d ,'d')
        var d1=parseInt(e.format("DD"))
        var j;
        for (j=1;j<=d1;j++){
            tasks.push({title:'Day '+j,content:"Add a task"})
        }
        this.setState({tasks})
    }
    
    _renderComponent(item){
        console.log("Came here")

        return(
            <Button onPress={()=>this.setState({modalvisible:true}) } >
            <Text> {item.content}</Text>
             </Button>
        )
    }
    render() {
        var i=this.props.navigation.getParam('i')
        return (
            <View>
                    <ImageBackground  source={require('../images/main.jpg')} style={{height:150,width:width}}>

    <Card>
<CardItem header><Text style={styles.header} >{i.location} 
</Text>
</CardItem>

    </Card>
    </ImageBackground>
  
<Accordion dataArray={this.state.tasks} renderContent={this._renderComponent} />
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

const styles=StyleSheet.create({
    header:{
        fontSize:20,
        color:'white',
        fontFamily:"Roboto_medium"
    }
})
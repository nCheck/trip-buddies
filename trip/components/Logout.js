import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { Button } from 'native-base'

export default class Logout extends Component {
    constructor(){
        super()
        console.log("ins logout ",this.state.modalvisible)
        this.setState({modalvisible:true})
    }
    state={modalvisible:true}
    goHome=()=>{
        console.log("GOin home")
        this.setState({modalvisible:false})
        this.props.navigation.goBack()
    }
    goLogin=()=>{
        this.setState(
    {modalvisible:false}        
        )
        this.props.navigation.navigate('Authenticate')
    }
    
    render() {
        return (
            <View>
             <Modal isVisible={this.state.modalvisible}
    backdropColor='black'


             >
          <View style={{backgroundColor:'white',height:150,width:200,alignSelf:'center',borderRadius:3}}>
          <Text style={{fontSize:18, margin:5}} >Logout</Text>

            <Text>Do you want to logout ?</Text>
            <View style={{ flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity><Text  onPress={this.goHome} style={styles.button} >No</Text></TouchableOpacity>

            <TouchableOpacity><Text onPress={this.goLogin}  style={styles.button} >Yes</Text></TouchableOpacity>
            </View>
          </View>
        </Modal>   
                                 </View>
    
    )
    }
}

const styles = StyleSheet.create({

    button:{
        marginTop:10,
        // backgroundColor:'yellow',
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:16,
        fontFamily:'Roboto_medium',
        // borderWidth:1,
        color:'blue',
        // borderColor:'black',
        borderRadius:3
    }
})

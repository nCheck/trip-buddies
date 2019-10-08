import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
const backimg = "https://wallpaperaccess.com/full/191948.jpg";

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      username   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {

    if ( viewId == 'login' ){
      this.props.navigation.navigate('Home');
    }
    else if ( viewId == 'register' ){
      this.props.navigation.navigate('Register');
    }

  }

  render() {
    return (
      <ImageBackground source={{uri : backimg}} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.pngtree.com/svg/20161229/_username_login_1172579.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Username"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer]} onPress={() => this.onClickListener('login')}>
          <Text>Login</Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    borderWidth : 1.5,
    borderColor : "#0059b8"
  },
  buttonBorder : {
    borderWidth : 1.5,
    borderColor : "#0059b8"
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
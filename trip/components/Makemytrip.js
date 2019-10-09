import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class MyWeb extends Component {

constructor(props){
    super(props);
    var loc = this.props.navigation.getParam('dest', 'Virar');

    this.state = {
        link : `https://holidayz.makemytrip.com/holidays/india/search?fromSearchWidget=true&searchDep=${loc}&dest=${loc}&depCity=Mumbai&dataType=All+Dates&dateSearched=All+Dates`
    }
}

  render() {
    console.log(this.state)
    return (
      <WebView
        source={{uri: this.state.link}}
        style={{marginTop: 10}}
      />
    );
  }
}
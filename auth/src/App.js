import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyDqe3eikRZueg7S81tFg28MIcydlxHVtag",
    authDomain: "auth-9620a.firebaseapp.com",
    databaseURL: "https://auth-9620a.firebaseio.com",
    projectId: "auth-9620a",
    storageBucket: "auth-9620a.appspot.com",
    messagingSenderId: "799541784163"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
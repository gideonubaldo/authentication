import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDqe3eikRZueg7S81tFg28MIcydlxHVtag',
    authDomain: 'auth-9620a.firebaseapp.com',
    databaseURL: 'https://auth-9620a.firebaseio.com',
    projectId: 'auth-9620a',
    storageBucket: 'auth-9620a.appspot.com',
    messagingSenderId: '799541784163'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false: 
        return <LoginForm />;
      default: 
      return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

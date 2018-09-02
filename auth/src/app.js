import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import { Header, Button, Card, CardSection, Spinner } from './component/common';
import LoginForm from './component/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBUnvOpd0p8y8d2kWD3CKtrqWqOkqapDHg',
      authDomain: 'authentification-56c35.firebaseapp.com',
      databaseURL: 'https://authentification-56c35.firebaseio.com',
      projectId: 'authentification-56c35',
      storageBucket: 'authentification-56c35.appspot.com',
      messagingSenderId: '254052708338'
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
          return (
        <Card>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
              </Button>
          </CardSection>
        </Card>
      );

      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;

    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authntification" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;

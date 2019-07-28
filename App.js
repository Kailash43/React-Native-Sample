import React, {Component} from 'react';
import {Platform, View, ScrollView, Text} from 'react-native';
import Showinfo from './showinfo';
import Firebase from 'firebase';
import Router from './components/Router'
// import styles from './styles';
import Login from './components/auth/Login';
// import ActivityFeed from './components/partials/ActivityFeed';

//Redux code
// Provider for react redux
import { Provider } from 'react-redux';
import store from './store';
//End of Redux code


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {loggedIn: false}
  }

  componentWillMount(){
    // Initialize Firebase
    Firebase.initializeApp({
      apiKey: "AIzaSyATxJMwj57OcDJWku9zfK0ACs5oYXTHwD0",
      authDomain: "reactnative-test-a3d44.firebaseapp.com",
      databaseURL: "https://reactnative-test-a3d44.firebaseio.com",
      projectId: "reactnative-test-a3d44",
      storageBucket: "",
      messagingSenderId: "217503698558",
      appId: "1:217503698558:web:c0fc1e87e369b0f5"
    });

    // console.log(Firebase);

    // Firebase.auth().onAuthStateChanged(user => {
    //   if(user)
    //     this.setState({loggedIn: true});
    //   else
    //     this.setState({loggedIn: false});
    // })

  }

  // renderContent(){
  //   if(this.state.loggedIn){
  //     return(
  //       <Text>Hello</Text>
  //       // <ActivityFeed />
  //     )
  //   }
  //   else {
  //     return(
  //       <Login />
  //     )
  //   }
  // }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          {/* <ScrollView> */}

            {/* login */}
            {/* {this.renderContent()} */}
            <Router />
            {/* Test codes */}
            {/* <Showinfo /> */}
          {/* </ScrollView> */}

        </View>
      </Provider>
    );
  }
}

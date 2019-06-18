/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Button} from 'react-native';
import styles  from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { userIdText: '', password: ''};
  }

  onLogin (){
    let userId = this.state.userIdText;
    let passwordText = this.state.password;
    alert(userId + ' ' + passwordText);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sign In</Text>
        <View style={styles.labelStyle}>
          <Text>User Id</Text>
          <TextInput style={styles.verticalStyle} onChangeText={(userIdText) => this.setState({userIdText})} placeholder={'Enter User Id'} value={this.state.userIdText}/>
        </View>
        <View style={styles.labelStyle}>
          <Text>Password</Text>
          <TextInput secureTextEntry={true} style={styles.verticalStyle} onChangeText={(password) => this.setState({password})} placeholder={'Enter Password'} value={this.state.password}/>
        </View>
        <Button
            onPress={this.onLogin.bind(this)}
            title="Login"
            color="#841584"
          />
      </View>
    );
  }
}

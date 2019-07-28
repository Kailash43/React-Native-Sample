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
import Card from './components/common/card';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardSection from './components/common/cardSection';
import Albums from './components/common/albums';

export default class showinfo extends Component {

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
    const myIcon = <Icon name="rocket" size={30} color="#900" />;
    return (
      <View inlineStyle={{textAlign: 'center'}}>
          {/* <Card>
              
          <Text style={styles.welcome}>{myIcon} Sign In</Text>
            <View style={styles.labelStyle}>
              <Text>User Id</Text>
              <TextInput style={styles.verticalStyle} onChangeText={(userIdText) => this.setState({userIdText})} placeholder={'Enter User Id'} value={this.state.userIdText}/>
            </View>
            <View style={styles.labelStyle}>
              <Text>Password</Text>
              <TextInput secureTextEntry={true} style={styles.verticalStyle} onChangeText={(password) => this.setState({password})} placeholder={'Enter Password'} value={this.state.password}/>
            </View>
            <CardSection>
              <Button
                  onPress={this.onLogin.bind(this)}
                  title="Login"
                  color="#841584"
                  width="100%"
                /> 
              </CardSection>
          </Card> */}
          <Albums />
      </View>
    );
  }
}

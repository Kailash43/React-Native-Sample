import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import firebase from 'firebase';
import Header from '../partials/Header';
import Button from '../partials/Button';
import Card from '../partials/Card';
import Spinner from '../partials/Spinner';
import { Actions } from 'react-native-router-flux'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


// Redux properties
import { connect } from 'react-redux';
import {emailChanged ,passwordChanged,onLogin} from '../Action';

class Login extends Component {

    onEmailChangedText(text){
        this.props.emailChanged(text);
    }

    onPasswordChangedText(text){
        this.props.passwordChanged(text);
    }

    onLoggedIn(){
        Actions.main();
        // email = this.props.email
        // password = this.props.password
        // this.props.onLogin({email, password})
    }

    onRender = () => {
        if(this.props.loading) {
            return <Spinner size="small" />
        }
            return (<Button onPress={this.onLoggedIn.bind(this)} >Login </Button>)
        
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         email: '',
    //         password: '',
    //         error: '',
    //         loading: false
    //     }
    // }

    // onLogin(){
    //     const {email,password,error} = this.state;
    //     this.setState({loading: true});
        
    //     console.log('hello', email, password);
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then(
    //         this.onLoginSuccess.bind(this)
    //     )
    //     .catch(() => {
    //         console.log(email, password);
    //         firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .catch((errorData) => {
    //             this.onLoginFailue.bind(this)
    //             console.log('error', errorData);
    //         }   
    //         )
    //     })
    // }
    // onLoginSuccess(){
    //     this.setState({
    //         email: '',
    //         password: '',
    //         error: '',
    //         loading: false
    //     })
    // }

    // onLoginFailue(){
    //     this.setState({loading: false});
    //     this.setState({error: ToastAndroid.show('Auth failed', ToastAndroid.LONG), loading: false});
    // }

    // onLoading(){
    //     if(this.state.loading){
    //         return <Spinner size='large' />
    //     }
    //     return (
    //         <Button style={{justifyContent: 'center'}} text='Login' onPress={this.onLogin.bind(this)}/>
    //     )
    // }

    render() {
        return (
            <View style={Styles.Container}>
            <Card >
            <Header>
                <Text>
                    LOGIN TO FITHUB
                </Text>
            </Header>
           <View style={Styles.CardSection} >
               <TextInput
                placeholder='Email'
                value = {this.props.email}
                onChangeText={this.onEmailChangedText.bind(this)}
                style={Styles.inputBox}
               />
           </View>
           <View style={Styles.CardSection} >
               <TextInput
                placeholder='password'
                value={this.props.password}
                onChangeText={this.onPasswordChangedText.bind(this)}
                secureTextEntry={true}
                style={Styles.inputBox}
               />
           </View>
          <View style={Styles.CardSection}>
                    {this.onRender()}
            </View> 
            {console.log(this.props.errors)}
        </Card>
        {ToastAndroid.show(this.props.error,ToastAndroid.LONG)}
       </View>
        )
    }
}

const Styles = StyleSheet.create({
    CardSection:{
        padding:12,
        backgroundColor:'#fff',
        justifyContent:'center',
        flexDirection:'row',
        position:'relative',
        borderWidth:0,
    },
    inputBox:{
        width:widthPercentageToDP('75%'),
        height:heightPercentageToDP('9%'),
        borderBottomWidth:1,
        borderColor:'#63E0F9'
    },
    Container:{
        flex:1,
        backgroundColor:'#C3FEFC',
        paddingTop:60,
    },
    Button:{
        alignItems:'center',
    }
})

const mapStateToProps = ({auth}) => {
    // return {
    //     email: state.auth.email,
    //     password: state.auth.password
    // }

    const {email, password, error, loading}= auth;
    return {email,password,error, loading};
}

// export default connect(mapStateToProps, {emailChanged,passwordChanged,onLogin})(Login)
export default connect(mapStateToProps,{emailChanged,passwordChanged,onLogin})(Login)
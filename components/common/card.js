import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

export default class Card extends Component{
    // const{card} = Styles
    render(){
        return(
            <View style={Styles.card}> 
                
                    {this.props.children}
                
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: '#e8e8e8',
        borderRadius: 2,
        padding: 10
    }
})
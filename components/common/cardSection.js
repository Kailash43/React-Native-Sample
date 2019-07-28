import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function CardSection(props){

    // const{card} = Styles

    return(
        <View style={Styles.cardSection}> 
            {props.children}
        </View>
    )
}

const Styles = StyleSheet.create({
    cardSection: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    }
})
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Card } from './card';

export default class AlbumDetail extends Component{

    render(){
    // const {artist,title, image} = this.props.value;
        return (
            <View style={Styles.Container}>
                <View>
                    
                    <Text style={{fontSize: 22, fontWeight: "bold", marginBottom:10}}><Image style={{height:30,width:30}} source={{uri: this.props.value.thumbnail_image}}/> {this.props.value.title}</Text>
                        <Image
                            style={{height: 300,resizeMode: 'cover'}}
                            source={{uri: this.props.value.image}}
                        />
                        <Text>
                        {this.props.value.artist} - {this.props.value.url} - {this.props.value.image} - {this.props.value.thumbnail_image} 

                        </Text>
                </View>
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
        // width:widthPercentageToDP('75%'),
        // height:heightPercentageToDP('9%'),
        borderBottomWidth:1,
        borderColor:'#63E0F9'
    },
    Container:{
        flex:1,
        backgroundColor:'#C3FEFC',
        paddingTop:20,
    },
    Button:{
        alignItems:'center',
    }
})

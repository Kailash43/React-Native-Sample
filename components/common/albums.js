import React, {Component} from 'react';
import {View} from 'react-native';
import AlbumDetail from './albumDetails';
import Card from './card';
import axios from 'axios';

export default class Albums extends Component{

    constructor(props){
        super(props);
        this.state = {
            albums: []
        }
    }

    componentDidMount(){
        console.log('hello');
        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => {
            console.log(response.data);
            this.setState({albums: response.data});
        });
    }

    albumDetail = () => {
        return this.state.albums.map( (value) => <AlbumDetail value={value} /> );
    }

    render (){
        return(
            <View>
                <Card>
                
                 {this.albumDetail()}
                </Card>
                
            </View>
        )
    }
}
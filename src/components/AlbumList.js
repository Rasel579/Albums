import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    state = { albums: [] };
 async componentWillMount() {
    const data = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const albumList = await data.json();
    this.setState({ albums: albumList });
 }

 renderAlbums() {
   return this.state.albums.map(album => 
   <AlbumDetail key={album.title} record={album} />);
 }

 render() {
     console.log(this.state);
        return (
            <View>
              {this.renderAlbums()}
            </View>
        );
      }
    }

export default AlbumList;

import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';

export default class Goggle extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
      </View> 
    );
  }
}

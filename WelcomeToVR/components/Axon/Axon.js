import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';

export default class Axon extends React.Component {
  render() {
    return (
      <View 
        style={{
          flex: 1,
          width: 5,
          height: 0.01,
          position: 'absolute',
          top: this.props.top,
          left: this.props.left,
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor: '#fff',
          layoutOrigin: [0, 0],
          transform: [
            {translate: [this.props.posX, this.props.posY, -5]},
            {scale: this.props.scale},
            {rotateZ: this.props.rotateZ}
            ]
        }}>
        <Image 
          source={asset('')} 
          style={{
            width: 1, 
            height: 1,
            transform: [ 
              {rotate: -30},
              {scale: 0.4},
            ],
          }}
        />
      </View>
    );
  }
}

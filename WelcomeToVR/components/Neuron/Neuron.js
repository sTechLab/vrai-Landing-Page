import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';

export default class Neuron extends React.Component {
  render() {
    return (
      <View 
        style={{
          flex: 1,
          width: 1.5,
          position: 'absolute',
          top: this.props.top,
          left: this.props.left,
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'transparent',
          layoutOrigin: [0, 0],
          transform: [{translate: [this.props.posX, this.props.posY, this.props.posZ]}]}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 0.2,
          fontWeight: '500',
        }}>
      {this.props.text}
      </Text>
      <Image
        source={asset('neuron7.png')} 
        style={{
          width: 1, 
          height: 1,
          transform: [ 
            {rotate: -30},
            {scale: 0.35},
          ],
        }}
      />
      </View> 
    );
  }
}

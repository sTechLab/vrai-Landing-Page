import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';
import Neuron from './components/Neuron'

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('trianglify9.svg')}
              style={{transform: [ {rotateY: -50} ]}}/>
        <Neuron posX='-3.8' posY='1.5' top='0' left='0' />
        <Neuron posX='-2.5' posY='-0.5' top='0' left='0' />
        <Neuron posX='-0.7' posY='0.8' top='0' left='0' />
        <Neuron posX='1.25' posY='0' top='0' left='0' />
        <Neuron posX='2.7' posY='1.2' top='0' left='0' />
        {/*<Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.1,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [ {translate: [0, 0, -4]} ],
          }}>
          placeholder
        </Text>
      */}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

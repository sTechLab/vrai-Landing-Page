import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
  AmbientLight,
  PointLight,
  DirectionalLight,
  SpotLight
} from 'react-vr';
import Neurons from './components/Neurons';
import Axon from './components/Axon';

export default class WelcomeToVR extends React.Component {
  render() {
    const neuronSpecs = {
      Paper: { name: 'Paper', x: 0, y: 0, z: -50 },
      People: { x: -20, y: -5, z: -50 },
      Experiments: { x: 16, y: 5, z: -50 },
      'Crowd Sourcing': { x: 10, y: -9, z: -50 },
      'VR Technologies': { x: -25, y: 10, z: -50 },
      Abstract: { x: -5, y: 8, z: -50 },
      'Proteus Effect': { x: 10, y: 12, z: -50 },
      'Drawing Power of Crowds': { x: 25, y: 6, z: -50 },
      'Restorative Effects of Virtual Environments': { x: 19, y: -3, z: -50 }
    };
    const axonSpecs = [
      ['Paper', 'People'],
      ['Paper', 'Abstract'],
      ['Paper', 'Experiments'],
      ['Paper', 'Crowd Sourcing'],
      ['Paper', 'VR Technologies'],
      ['Experiments', 'Proteus Effect'],
      ['Experiments', 'Drawing Power of Crowds'],
      ['Experiments', 'Restorative Effects of Virtual Environments']
    ];

    return (
      <View>
        <AmbientLight intensity={0.6} style={{}} />
        <DirectionalLight
          style={{
            color: 'white',
            transform: [{ translate: [1000, 500, 2000] }]
          }}
        />
        <Pano
          source={asset('trianglify9.svg')}
          //style={{ transform: [{ rotateY: -50 }] }}
        />
        <Neurons neurons={neuronSpecs} />
        <Axon neurons={neuronSpecs} axons={axonSpecs} />
        <Text>hi</Text>
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
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

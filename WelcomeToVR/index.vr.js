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
      People: { x: -20, y: -3, z: -50 },
      Experiments: { x: 18, y: 4, z: -50 },
      'Crowd Sourcing': { x: 10, y: -9, z: -50 },
      'VR Technologies': { x: -25, y: 10, z: -50 },
      Abstract: { x: -6, y: -6, z: -75 },
      'Proteus Effect': { x: 12, y: 15, z: -75 },
      'Drawing Power of Crowds': { x: 40, y: 20, z: -75 },
      'Restorative Effects of Virtual Environments': { x: 38, y: -5, z: -75 }
    };

    return (
      <View>
        <AmbientLight intensity={1} style={{}} />
        <DirectionalLight
          style={{
            color: 'white',
            transform: [{ translate: [1000, 500, 2000] }]
          }}
        />
        <Pano
          source={asset('chess-world.jpg')}
          //style={{ transform: [{ rotateY: -50 }] }}
        />
        <Neurons spec={neuronSpecs} />
        <Axon neuron1={[0, 0, -50]} neuron2={[-25, 10, -50]} />
        {/*}<Axon posX={-1.44} posY={-0.36} scale={0.36} rotateZ="-22deg" />
        <Axon posX={-3.3} posY={-0.6} scale={0.39} rotateZ="35deg" />
        <Axon posX={-0.68} posY={0.27} scale={0.62} rotateZ="7deg" />
        <Axon posX={0.95} posY={1} scale={0.18} rotateZ="95deg" />
        <Axon posX={0.5} posY={0.5} scale={0.15} rotateZ="-6deg" />
        <Axon posX={1.47} posY={0.22} scale={0.16} rotateZ="-24deg" />
        <Axon posX={-2.1} posY={-0.32} scale={0.13} rotateZ="133deg" />
        <Axon posX={-2.75} posY={0.52} scale={0.16} rotateZ="125deg" />
        */}
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

import AbstractView from './components/AbstractView';
import Axon from './components/Axon';
import CrowdSourceView from './components/CrowdSourceView';
import Exp1View from './components/Exp1View';
import Exp2View from './components/Exp2View';
import Exp3View from './components/Exp3View';
import ExperimentsView from './components/ExperimentsView';
import Neurons from './components/Neurons';
import PaperView from './components/PaperView';
import PeopleView from './components/PeopleView';
import VRView from './components/VRView';
import React from 'react';
import {
  asset,
  AmbientLight,
  Animated,
  AppRegistry,
  DirectionalLight,
  Image,
  Pano,
  Plane,
  PointLight,
  SpotLight,
  Text,
  View
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(
      // Uses easing functions
      this.state.color, // The value to drive
      {
        toValue: 1,
        duration: 5000
      } // Configuration
    ).start(); // Don't forget start!
  }

  render() {
    const neuronSpecs = {
      Paper: { name: 'Paper', x: 0, y: 0, z: -50 },
      People: { x: -20, y: -5, z: -50 },
      Experiments: { x: 15, y: 6, z: -50 },
      'Crowd Sourcing': { x: 10, y: -9, z: -50 },
      'VR Technologies': { x: -25, y: 10, z: -50 },
      Abstract: { x: -5, y: 8, z: -50 },
      'Proteus Effect': { x: 10, y: 12, z: -50 },
      'Drawing Power of Crowds': { x: 25, y: 7, z: -50 },
      'Restorative Effects of Virtual Environments': { x: 20, y: -2, z: -50 }
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
          style={{ transform: [{ rotateY: -50 }] }}
        />
        <Neurons neurons={neuronSpecs} />
        <Axon neurons={neuronSpecs} axons={axonSpecs} />
        <View
          style={{
            display: 'flex',
            position: 'absolute',
            flexDirection: 'column',
            height: 1,
            width: 4,
            padding: 1,
            backgroundColor: 'lightgrey',
            flex: 1,
            opacity: 0.8,
            transform: [{ translate: [-2, 1, -2] }, { scale: 0.5 }]
          }}
        >
          <Text
            style={{
              position: 'absolute',
              top: -0.2,
              left: 0.15,
              fontSize: 0.3,
              fontWeight: '400'
            }}
          >
            Abstract
          </Text>
          <PaperView />
          <PeopleView />
          <AbstractView />
          <VRView />
          <CrowdSourceView />
          <ExperimentsView />
          <Exp1View />
          <Exp2View />
          <Exp3View />
        </View>
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

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
import VrTechView from './components/VrTechView';
import React from 'react';
import {
  asset,
  AmbientLight,
  Animated,
  AppRegistry,
  CylindricalPanel,
  DirectionalLight,
  Image,
  Pano,
  Plane,
  PointLight,
  SpotLight,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
      color: new Animated.Value(0),
      contentActive: false,
      renderedContent: null
    };
    console.log(this.state);
  }

  _updateRenderedContent = updatedContent => {
    this.setState({ renderedContent: updatedContent });
    this.setState({ contentActive: true });
  };

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
    // connections between neurons
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
    const contentViews = {
      Paper: <PaperView />,
      People: <PeopleView />,
      Experiments: <ExperimentsView />,
      'Crowd Sourcing': <CrowdSourceView />,
      'VR Technologies': <VrTechView />,
      Abstract: <AbstractView />,
      'Proteus Effect': <Exp2View />,
      'Drawing Power of Crowds': <Exp3View />,
      'Restorative Effects of Virtual Environments': <Exp1View />
    };

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
        <Neurons
          neurons={neuronSpecs}
          updateRenderedContent={this._updateRenderedContent}
        />
        <Axon neurons={neuronSpecs} axons={axonSpecs} />
        {(() => {
          if (this.state.contentActive) {
            return (
              <CylindricalPanel
                layer={{ width: 640, height: 450, radius: 2 }}
                style={{
                  position: 'absolute'
                }}
              >
                <View
                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  <Text
                    style={{
                      top: 0,
                      left: 30,
                      fontSize: 55,
                      fontWeight: '400'
                    }}
                  >
                    {this.state.renderedContent}
                  </Text>
                  <View
                    style={{
                      opacity: 0.9,
                      width: 640,
                      height: 320,
                      backgroundColor: 'lightslategrey',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 15
                    }}
                  >
                    {contentViews[this.state.renderedContent]}
                  </View>
                </View>
              </CylindricalPanel>
            );
          }
        })()}
      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

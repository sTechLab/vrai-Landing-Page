import React from 'react';
import { asset, Animated, Image, Pano, Text, View } from 'react-vr';

export default class AbstractView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      axonThickness: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(
      // Uses easing functions
      this.state.axonThickness, // The value to drive
      {
        toValue: 1,
        duration: 3000
      } // Configuration
    ).start(); // Don't forget start!
  }

  render() {
    return (
      <View
        style={{
          borderWidth: 0,
          borderColor: 'white',
          display: 'flex',
          position: 'absolute',
          flexDirection: 'row',
          height: 1.7,
          width: 3.75,
          padding: 0.1,
          backgroundColor: '#0094E0',
          flex: 1,
          opacity: 1,
          transform: [{ translate: [0.125, -0.2, 0] }]
        }}
      >
        <Text
          style={{
            fontSize: 0.1,
            fontWeight: '400',
            opacity: 1,
            top: -0.015
            // textAlign: 'justify',
            // lineHeight: 40
          }}
        >
          {`We build on the increasing availability of Virtual Reality (VR) devices and Web technologies to conduct behavioral experiments in VR using crowdsourcing techniques. A new recruiting and validation method allows us to create a panel of eligible experiment participants recruited from Amazon Mechanical Turk. Using this panel, we ran three different crowdsourced VR experiments, each reproducing one of three VR illusions: place illusion, embodiment illusion, and plausibility illusion. Our experience and worker feedback on these experiments show that conducting Web-based VR experiments using crowdsourcing is already feasible, though some challenges--including scale--remain. Such crowdsourced VR experiments on the Web have the potential to finally support replicable VR experiments with diverse populations at a low cost.`}
        </Text>
      </View>
    );
  }
}

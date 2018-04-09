import React from 'react';
import { asset, Animated, Image, Pano, Text, View } from 'react-vr';

export default class CrowdSourceView extends React.Component {
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
          borderWidth: 1,
          borderColor: 'white',
          width: 630,
          height: 310,
          backgroundColor: '#0094E0',
          borderRadius: 15
        }}
      >
        <Text
          style={{
            fontSize: 18.5,
            fontWeight: '100',
            opacity: 1,
            marginHorizontal: 30,
            marginTop: 35,
            textAlign: 'center'
            // lineHeight: 40
          }}
        >
          {`Placeholder text`}
        </Text>
      </View>
    );
  }
}

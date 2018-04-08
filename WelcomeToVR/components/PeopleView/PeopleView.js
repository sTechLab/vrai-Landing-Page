import React from 'react';
import { asset, Animated, Image, Pano, Text, View } from 'react-vr';

export default class PeopleView extends React.Component {
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
    return <View style={{ display: 'none' }} />;
  }
}

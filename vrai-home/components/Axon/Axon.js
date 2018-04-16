import React from 'react';
import { Easing } from 'react-native';
import { asset, Animated, Image, Pano, Text, View } from 'react-vr';

export default class Axon extends React.Component {
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
        duration: 3000,
        easing: Easing.ease
      } // Configuration
    ).start(); // Don't forget start!
  }

  render() {
    let neuronSpecs = this.props.neurons;
    let axonSpecs = this.props.axons;
    return (
      <View>
        {axonSpecs.map(neurons => (
          <Animated.View
            key={neurons}
            style={{
              width: Math.sqrt(
                Math.pow(
                  neuronSpecs[neurons[0]].x - neuronSpecs[neurons[1]].x,
                  2
                ) +
                  Math.pow(
                    neuronSpecs[neurons[0]].y - neuronSpecs[neurons[1]].y,
                    2
                  ) +
                  Math.pow(
                    neuronSpecs[neurons[0]].z - neuronSpecs[neurons[1]].z,
                    2
                  )
              ),
              height: this.state.axonThickness.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.08]
              }),
              position: 'absolute',
              backgroundColor: 'lightgrey',
              layoutOrigin: [0, 0],
              transform: [
                {
                  translate: [
                    Math.min(
                      neuronSpecs[neurons[0]].x,
                      neuronSpecs[neurons[1]].x
                    ) - 1,

                    (neuronSpecs[neurons[0]].y + neuronSpecs[neurons[1]].y) /
                      2 -
                      0.6,
                    (neuronSpecs[neurons[0]].z + neuronSpecs[neurons[1]].z) / 2
                  ]
                },
                {
                  rotateZ: `${Math.atan(
                    (neuronSpecs[neurons[0]].y - neuronSpecs[neurons[1]].y) /
                      (neuronSpecs[neurons[0]].x - neuronSpecs[neurons[1]].x)
                  )}rad`
                }
              ]
            }}
          />
        ))}
      </View>
    );
  }
}

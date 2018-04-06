import React from 'react';
import { asset, Pano, Text, View, Image } from 'react-vr';

export default class Axon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let neuronSpecs = this.props.neurons;
    let axonSpecs = this.props.axons;
    return (
      <View>
        {axonSpecs.map(neurons => (
          <View
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
              height: 0.05,
              position: 'absolute',
              backgroundColor: '#fff',
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

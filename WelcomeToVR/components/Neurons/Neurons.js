import React from 'react';
import {
  asset,
  AmbientLight,
  Animated,
  DirectionalLight,
  Image,
  Model,
  Pano,
  PointLight,
  Sphere,
  SpotLight,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class Neurons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neuronState: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(
      // Uses easing functions
      this.state.neuronState, // The value to drive
      {
        toValue: 1,
        duration: 3000
      } // Configuration
    ).start(); // Don't forget start!
  }

  render() {
    let neuronSpecs = this.props.neurons;
    return (
      <View>
        {Object.keys(neuronSpecs).map(key => (
          <Animated.View
            style={{
              flexDirection: 'row',
              opacity: this.state.neuronState.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              })
            }}
            key={key}
          >
            <VrButton onClick={() => this._onViewClicked()}>
              <Text
                style={{
                  fontWeight: '300',
                  position: 'absolute',
                  transform: [
                    {
                      translate: [
                        -0.25 + neuronSpecs[key].x / 20,
                        0.15 + neuronSpecs[key].y / 18,
                        neuronSpecs[key].z / 18
                      ]
                    },
                    { scale: 0.75 }
                  ]
                }}
              >
                {key}
              </Text>
              <Model
                source={{
                  obj: asset('poly1.obj'),
                  mtl: asset('poly1.mtl')
                }}
                lit={true}
                wireframe={true}
                billboarding="off"
                style={{
                  width: 1,
                  height: 1,
                  margin: 0,
                  // opacity: 1,
                  layoutOrigin: [5, -5],
                  // animation: ,
                  transform: [
                    {
                      translate: [
                        neuronSpecs[key].x,
                        neuronSpecs[key].y,
                        neuronSpecs[key].z
                      ]
                    },
                    { scale: 1 }
                  ]
                }}
              />
            </VrButton>
          </Animated.View>
        ))}
      </View>
    );
  }
}

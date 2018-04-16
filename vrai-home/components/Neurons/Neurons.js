import React from 'react';
import { Easing } from 'react-native';
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
      neuronState: new Animated.Value(0),
      renderedContent: props.renderedContent
    };
    for (key of Object.keys(props.neurons)) {
      this.state[key] = {};
      this.state[key].obj = 'Icosahedron_blue.obj';
      this.state[key].mtl = 'Icosahedron_blue.mtl';
    }
  }

  componentDidMount() {
    Animated.timing(
      // Uses easing functions
      this.state.neuronState, // The value to drive
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.ease
      } // Configuration
    ).start(); // Don't forget start!
  }

  render() {
    let neuronSpecs = this.props.neurons;
    let objBlue = 'Icosahedron_blue.obj';
    let objGreen = 'Icosahedron_green.obj';
    let mtlBlue = 'Icosahedron_blue.mtl';
    let mtlGreen = 'Icosahedron_green.mtl';

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
            <VrButton
              onEnter={() => {
                this.setState({ [`${key}`]: { obj: objGreen, mtl: mtlGreen } });
              }}
              onExit={() => {
                this.setState({ [`${key}`]: { obj: objBlue, mtl: mtlBlue } });
              }}
              onClick={() => this.props.updateRenderedContent(key)}
            >
              <Text
                style={{
                  width: 0.7,
                  fontWeight: '400',
                  position: 'absolute',
                  transform: [
                    {
                      translate: [
                        -0.14 + neuronSpecs[key].x / 15,
                        0.18 + neuronSpecs[key].y / 17,
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
                  obj: asset(this.state[key].obj),
                  mtl: asset(this.state[key].mtl)
                }}
                lit={true}
                wireframe={true}
                billboarding="off"
                style={{
                  width: 1,
                  height: 1,
                  margin: 0,
                  // opacity: 1,
                  layoutOrigin: [0, 0],
                  // animation: ,
                  transform: [
                    {
                      translate: [
                        neuronSpecs[key].x,
                        neuronSpecs[key].y,
                        neuronSpecs[key].z
                      ]
                    },
                    { rotateY: '0deg' },
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

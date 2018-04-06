import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Image,
  Model,
  AmbientLight,
  PointLight,
  DirectionalLight,
  SpotLight,
  Sphere
} from 'react-vr';

export default class Neurons extends React.Component {
  render() {
    let neuronSpecs = this.props.neurons;
    return (
      <View>
        {Object.keys(neuronSpecs).map(key => (
          <View style={{ flexDirection: 'row' }} key={key}>
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
          </View>
        ))}
      </View>
    );
  }
}

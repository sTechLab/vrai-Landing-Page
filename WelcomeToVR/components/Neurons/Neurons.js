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
          <Model
            key={key}
            source={{
              obj: asset('poly1.obj')
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
        ))}
      </View>
    );
  }
}

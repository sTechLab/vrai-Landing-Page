import React from 'react';
import { asset, Pano, Text, View, Image } from 'react-vr';

export default class Axon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let width = Math.sqrt(this.props);

    return (
      <View
        style={{
          width: 27,
          height: 0.05,
          position: 'absolute',
          backgroundColor: '#fff',
          layoutOrigin: [0, 0],
          transform: [{ translate: [-25, 5, -50] }, { rotateZ: '-22deg' }]
        }}
      />
    );
  }
}

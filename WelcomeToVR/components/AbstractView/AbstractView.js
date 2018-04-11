import React from 'react';
import { asset, Animated, Image, Pano, Text, View } from 'react-vr';

export default class AbstractView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 630,
      height: 300
    };
  }

  componentDidMount() {
    this.props.setWidth(this.state.width);
    this.props.setHeight(this.state.height);
  }

  render() {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: 'white',
          width: this.state.width,
          height: this.state.height,
          backgroundColor: '#222',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '100',
            opacity: 1,
            width: 500,
            textAlign: 'center'
            // lineHeight: 40
          }}
        >
          {`We build on the increasing availability of Virtual Reality (VR) devices and Web technologies to conduct behavioral experiments in VR using crowdsourcing techniques. Our experience and worker feedback show that conducting Web-based VR experiments using crowdsourcing is already feasible, though some challenges---including scale---remain. Such crowdsourced VR experiments on the Web have the potential to finally support replicable VR experiments with diverse populations at a low cost.`}
        </Text>
      </View>
    );
  }
}

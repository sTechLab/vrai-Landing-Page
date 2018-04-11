import React from 'react';
import { asset, Animated, Image, Pano, Text, View } from 'react-vr';

export default class PaperView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 570,
      height: 240
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
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 40
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '100',
            opacity: 1,
            textAlign: 'justify'
          }}
        >
          {`Presenting at The Web Conference 2018, Lyon, France -- Crowdsourcing and Human Computation for the Web Research Track.\n
            The PDF version is available through: https://arxiv.org/abs/1802.08345`}
        </Text>
      </View>
    );
  }
}

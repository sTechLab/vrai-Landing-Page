import React from 'react';
import { asset, Animated, Image, Pano, Text, View } from 'react-vr';

export default class CrowdSourceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 570,
      height: 310
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
          width: this.state.width,
          height: this.state.height,
          backgroundColor: '#111',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 50
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
          {`Def. [Wikipedia]
            "Crowdsourcing is a sourcing model in which individuals or organizations obtain goods and services, including ideas and finances, from a large, relatively open and often rapidly-evolving group of internet users."\n
            In this paper we use crowdsourcing to refer to "microtasks" performed in parallel by large, paid crowds (e.g. Amazon Mechanical Turk).`}
        </Text>
      </View>
    );
  }
}

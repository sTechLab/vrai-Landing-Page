import { vrTech } from '../viewSpecs';
import React from 'react';
import { asset, Animated, Image, Pano, Text, View, VrButton } from 'react-vr';

export default class VrTechView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 720,
      height: 350
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
          padding: 40,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {Object.keys(vrTech).map(key => (
          <View
            key={vrTech[`${key}`].category}
            style={{
              width: 201,
              height: 300,
              backgroundColor: 'transparent',
              justifyContent: 'space-between'
            }}
          >
            <Image
              source={asset(vrTech[key].img)}
              style={{
                width: 201,
                height: 134,
                position: 'absolute',
                top: 50
              }}
            />
            <VrButton
              style={{
                marginTop: 200
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '200',
                  textAlign: 'center'
                }}
              >
                {vrTech[key].category}
              </Text>
            </VrButton>
          </View>
        ))}
      </View>
    );
  }
}

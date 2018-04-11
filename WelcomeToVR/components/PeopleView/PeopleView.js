import { authors } from '../viewSpecs';
import React from 'react';
import { asset, Animated, Image, Pano, Text, View, VrButton } from 'react-vr';

export default class PeopleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 700,
      height: 320
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
          padding: 40,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {Object.keys(authors).map(key => (
          <View
            key={key}
            style={{
              width: 100,
              height: 190,
              backgroundColor: 'transparent',
              justifyContent: 'space-around'
            }}
          >
            <Image
              source={asset(authors[key].img)}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                position: 'absolute',
                top: 10
              }}
            />
            <VrButton
              style={{
                marginTop: 90
              }}
              onClick={() => this.props.updateRenderedContent(key)}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '200',
                  textAlign: 'center'
                }}
              >
                {authors[key].name}
              </Text>
            </VrButton>
          </View>
        ))}
      </View>
    );
  }
}

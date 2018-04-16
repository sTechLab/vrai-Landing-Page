import { authors } from '../viewSpecs';
import React from 'react';
import {
  asset,
  Animated,
  Image,
  Pano,
  Text,
  View,
  VrButton,
  NativeModules
} from 'react-vr';

const Linking = NativeModules.LinkingManager;

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
          width: this.state.width,
          height: this.state.height,
          backgroundColor: '#111',
          borderRadius: 3,
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
              onClick={() =>
                Linking.openURL(authors[key].link).catch(err =>
                  console.error('An error occurred', err)
                )
              }
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

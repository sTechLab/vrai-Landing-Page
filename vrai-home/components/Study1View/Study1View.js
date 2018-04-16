import React from 'react';
import { studies } from '../viewSpecs';
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

export default class Study1View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 630,
      height: 300,
      padding: 50,
      linkColor: 'dodgerblue'
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: this.state.padding
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
          {`${studies['Study 1'].intro}

          Estimated Time: 5 min`}
        </Text>
        <VrButton
          style={{
            width: 400,
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: 20
          }}
          onEnter={() => {
            this.setState({ linkColor: 'deepskyblue' });
          }}
          onExit={() => {
            this.setState({ linkColor: 'dodgerblue' });
          }}
          onClick={() =>
            Linking.openURL('https://www.google.com').catch(err =>
              console.error('An error occurred', err)
            )
          }
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: '400',
              color: this.state.linkColor,
              textAlign: 'left'
            }}
          >
            {`Experience the Experiment >`}
          </Text>
        </VrButton>
      </View>
    );
  }
}

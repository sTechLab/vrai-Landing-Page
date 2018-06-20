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

export default class PaperView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 590,
      height: 270,
      padding: 50,
      linkColor: 'deepskyblue'
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
          padding: 50
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '100',
            opacity: 1,
            textAlign: 'justify',
            top: 10
          }}
        >
          {`Presented at The Web Conference 2018, Lyon, France -- Crowdsourcing and Human Computation for the Web Research Track.\n
            The PDF version is available through:`}
        </Text>
        <VrButton
          style={{
            width: 500,
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: 10
          }}
          onEnter={() => {
            this.setState({ linkColor: 'skyblue' });
          }}
          onExit={() => {
            this.setState({ linkColor: 'deepskyblue' });
          }}
          onClick={() =>
            Linking.openURL('https://arxiv.org/abs/1802.08345').catch(err =>
              console.error('An error occurred', err)
            )
          }
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: this.state.linkColor,
              textAlign: 'left'
            }}
          >
            {`arxiv.org/abs/1802.08345`}
          </Text>
        </VrButton>
      </View>
    );
  }
}

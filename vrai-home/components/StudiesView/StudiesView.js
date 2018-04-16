import React from 'react';
import { studies } from '../viewSpecs';
import { asset, Animated, Image, Pano, Text, View, VrButton } from 'react-vr';

export default class StudiesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 720,
      height: 360,
      padding: 50,
      'Study 1': { linkColor: 'dodgerblue' },
      'Study 2': { linkColor: 'dodgerblue' },
      'Study 3': { linkColor: 'dodgerblue' },
      renderedContent: props.renderedContent
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
          alignItems: 'center',
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
          {`We conducted three experimental studies in Virtual Reality on Amazon Mechanical Turk. The studies all followed a similar flow; we recruited participants from the VR Panel, provided study instructions, ran the experiment, and collected feedback in an exit survey.`}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: this.state.width - this.state.padding * 2 - 50,
            height: 110,
            marginTop: 30
          }}
        >
          {Object.keys(studies).map(key => (
            <VrButton
              style={{
                width: (this.state.width - this.state.padding * 2) / 3.5,
                height: 135,
                backgroundColor: '#222',
                borderWidth: 2,
                borderColor: '#666',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 10
              }}
              onEnter={() => {
                this.setState({ [`${key}`]: { linkColor: 'deepskyblue' } });
              }}
              onExit={() => {
                this.setState({ [`${key}`]: { linkColor: 'dodgerblue' } });
              }}
              onClick={() =>
                this.props.updateRenderedContent(studies[`${key}`].name)
              }
              key={key}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: this.state[`${key}`].linkColor,
                  textAlign: 'justify'
                }}
              >
                {`${key}\n\n${studies[`${key}`].name}`}
              </Text>
            </VrButton>
          ))}
        </View>
      </View>
    );
  }
}

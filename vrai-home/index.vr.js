import AbstractView from './components/AbstractView';
import Axon from './components/Axon';
import CrowdSourceView from './components/CrowdSourceView';
import Study1View from './components/Study1View';
import Study2View from './components/Study2View';
import Study3View from './components/Study3View';
import StudiesView from './components/StudiesView';
import Neurons from './components/Neurons';
import PaperView from './components/PaperView';
import PeopleView from './components/PeopleView';
import SoftwareView from './components/SoftwareView';
import { axonSpecs, neuronSpecs } from './components/viewSpecs';
import VrTechView from './components/VrTechView';
import React from 'react';
import {
  asset,
  AmbientLight,
  Animated,
  AppRegistry,
  CylindricalPanel,
  DirectionalLight,
  Image,
  Pano,
  Plane,
  PointLight,
  SpotLight,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
      color: new Animated.Value(0),
      panelWidth: 800,
      panelHeight: 550,
      contentActive: false,
      renderedContent: null,
      contentViewWidth: 0,
      contentViewHeight: 0
    };
  }

  _updateRenderedContent = updatedContent => {
    this.setState({ renderedContent: updatedContent });
    this.setState({ contentActive: true });
  };

  _closeContentView = () => {
    this.setState({ renderedContent: null });
    this.setState({ contentActive: false });
  };

  _setViewWidth = childWidth => {
    this.setState({ contentViewWidth: childWidth + 4 });
  };

  _setViewHeight = childHeight => {
    this.setState({ contentViewHeight: childHeight + 4 });
  };

  componentDidMount() {
    Animated.timing(
      // Uses easing functions
      this.state.color, // The value to drive
      {
        toValue: 1,
        duration: 5000
      } // Configuration
    ).start(); // Don't forget start!
  }

  render() {
    const contentViews = {
      Paper: (
        <PaperView
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      ),
      People: (
        <PeopleView
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      ),
      Software: (
        <SoftwareView
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      ),
      Studies: (
        <StudiesView
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
          updateRenderedContent={this._updateRenderedContent}
        />
      ),
      'Crowd Sourcing': (
        <CrowdSourceView
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      ),
      'VR Technologies': (
        <VrTechView
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      ),
      Abstract: (
        <AbstractView
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      ),
      'Proteus Effect': (
        <Study2View
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      ),
      'Drawing Power of Crowds': (
        <Study3View
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      ),
      'Restorative Effects of Virtual Environments': (
        <Study1View
          setWidth={this._setViewWidth}
          setHeight={this._setViewHeight}
        />
      )
    };

    return (
      <View>
        <AmbientLight intensity={0.6} style={{}} />
        <DirectionalLight
          style={{
            color: 'white',
            transform: [{ translate: [1000, 500, 2000] }]
          }}
        />
        <Pano
          source={asset('trianglify9.svg')}
          style={{ transform: [{ rotateY: -50 }] }}
        />

        <Neurons
          neurons={neuronSpecs}
          updateRenderedContent={this._updateRenderedContent}
        />
        <Axon neurons={neuronSpecs} axons={axonSpecs} />
        {(() => {
          if (this.state.contentActive) {
            return (
              <CylindricalPanel
                layer={{
                  width: this.state.panelWidth,
                  height: this.state.panelHeight,
                  radius: 2
                }}
                style={{
                  position: 'absolute'
                  // display: 'flex',
                  // flexDirection: 'column',
                  // justifyContent: 'center',
                  // alignItems: 'center'
                }}
              >
                <View
                  style={{
                    backgroundColor: 'transparent',
                    width: this.state.contentViewWidth,
                    height: this.state.contentViewHeight,
                    marginHorizontal:
                      (this.state.panelWidth - this.state.contentViewWidth) / 2
                  }}
                >
                  <Text
                    style={{
                      fontSize: 55,
                      fontWeight: '400',
                      width: this.state.contentViewWidth
                    }}
                  >
                    {this.state.renderedContent}
                  </Text>
                  <View
                    style={{
                      opacity: 0.9,
                      width: this.state.contentViewWidth,
                      height: this.state.contentViewHeight,
                      backgroundColor: '#888',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 3
                    }}
                  >
                    {contentViews[this.state.renderedContent]}
                  </View>
                </View>
                <VrButton
                  style={{
                    width: 120,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: '#111',
                    borderWidth: 2,
                    borderColor: '#888',
                    alignSelf: 'center',
                    marginTop: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onClick={() => this._closeContentView()}
                >
                  <Text
                    style={{
                      width: 80,
                      height: 40,
                      fontSize: 28,
                      fontWeight: '200',
                      color: '#fff',
                      textAlign: 'center'
                    }}
                  >
                    Close
                  </Text>
                </VrButton>
              </CylindricalPanel>
            );
          }
        })()}
      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

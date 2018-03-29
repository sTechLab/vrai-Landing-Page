import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';
import Goggle from './components/Goggle'

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('trianglify11.svg')}/>
        
        {// <Image source={asset('chess-world.jpg')}/> 
        }
        <View style={{
          flex: 1,
          width: 5,
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor: '#333333',
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -5]}]
        }}>
          <Image source={asset('chess-world.jpg')} 
                 style={{width: 1, height: 1}}
          />
        </View>
        {//<Goggle/>
        }
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.1,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          placeholder
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

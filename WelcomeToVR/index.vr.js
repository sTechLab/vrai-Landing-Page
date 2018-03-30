import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';
import Neuron from './components/Neuron'
import Axon from './components/Axon'

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('trianglify9.svg')}
          style={{transform: [ {rotateY: -50} ]}}/>
        <Neuron 
          text={'Paper'} 
          posX={-0.7} 
          posY={0.8} 
          posZ={-5} 
          top={0} 
          left={0} />
        <Neuron 
          text={'Abstract'} 
          posX={-1.8} 
          posY={2.5} 
          posZ={-10} 
          top={0} 
          left={0} />
        <Neuron 
          text={'Details'} 
          posX={0.6} 
          posY={-0.5} 
          posZ={-10} 
          top={0} 
          left={0} />
        <Neuron 
          text='Experiments' 
          posX='2.7' 
          posY='1.2' 
          posZ='-5'  
          top='0' 
          left='0' />
        <Neuron 
          text='Restorative Effects of Virtual Environments' 
          posX='8' 
          posY='1.2'  
          posZ='-10' 
          top='0' 
          left='0' />
        <Neuron 
          text='Proteus Effect' 
          posX='4.3' 
          posY='1.8'  
          posZ='-10' 
          top='0' 
          left='0' />
        <Neuron 
          text='Drawing Power  of Crowds'
          posX='6' 
          posY='4' 
          posZ='-10' 
          top='0' 
          left='0' />
        <Neuron 
          text='People' 
          posX='-3.8' 
          posY='1.5' 
          posZ='-5' 
          top='0' 
          left='0' />
        <Neuron 
          text='Crowdsourcing' 
          posX='-2.5' 
          posY='-0.5' 
          posZ='-5' 
          top='0' 
          left='0' />
        <Neuron 
          text='VR Technologies' 
          posX='1.25' 
          posY='0' 
          posZ='-5' 
          top='0' 
          left='0' />
        <Axon 
          posX={-3.92} 
          posY={0.4} 
          scale={0.58} 
          rotateZ='-14deg' 
          top={0} 
          left={0} />
        <Axon 
          posX={-1.44} 
          posY={-0.36} 
          scale={0.36} 
          rotateZ='-22deg' 
          top={0} 
          left={0} />
        <Axon 
          posX={-3.3} 
          posY={-0.6} 
          scale={0.39}
          rotateZ='35deg' 
          top={0} 
          left={0} />
        <Axon 
          posX={-0.68} 
          posY={0.27} 
          scale={0.62} 
          rotateZ='7deg' 
          top={0} 
          left={0} />
        <Axon 
          posX={0.95} 
          posY={1} 
          scale={0.18} 
          rotateZ='95deg' 
          top={0} 
          left={0} />
        <Axon 
          posX={0.5} 
          posY={0.5} 
          scale={0.15} 
          rotateZ='-6deg' 
          top={0} 
          left={0} />
        <Axon 
          posX={1.47} 
          posY={0.22} 
          scale={0.16} 
          rotateZ='-24deg' 
          top={0} 
          left={0} />
        <Axon 
          posX={-2.1} 
          posY={-0.32} 
          scale={0.13} 
          rotateZ='133deg' 
          top={0} 
          left={0} />
        <Axon 
          posX={-2.75} 
          posY={0.52} 
          scale={0.16} 
          rotateZ='125deg' 
          top={0} 
          left={0} />


        {/*<Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.1,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [ {translate: [0, 0, -4]} ],
          }}>
          placeholder
        </Text>
      */}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

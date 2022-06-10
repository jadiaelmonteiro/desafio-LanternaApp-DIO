import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const App = () => {
  const toogle = true;
  return <View style={toogle ? style.containerLight : style.container}>
    <Image
      style={toogle ? style.lightingOn : style.lightingOff}
      source={toogle
        ? require('./assets/icons/eco-light.png')
        : require('./assets/icons/eco-light-off.png')
      }
    />
  </View>
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    widht: 150,
    height: 150
  }
});
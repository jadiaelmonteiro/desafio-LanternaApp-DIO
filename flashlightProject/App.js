import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const App = () => {

  const [toogle, setToogle] = useState(true);
  const handleChangeToogle = () => setToogle(oldToogle => !oldToogle);

  return <View style={toogle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={ handleChangeToogle }>
      <Image
        style={toogle ? style.lightingOn : style.lightingOff}
        source={toogle
          ? require('./assets/icons/eco-light.png')
          : require('./assets/icons/eco-light-off.png')
        }
      />
      <Image
        style={style.logoDio}
        source={toogle
          ? require('./assets/icons/logo-dio.png')
          : require('./assets/icons/logo-dio-white.png')} />
    </TouchableOpacity>
  </View >
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
  },
  logoDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
});
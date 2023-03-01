import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Logo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/b2bLogo.png')}
        style={{ width: '50%', height: '50%', resizeMode: 'contain' }}
      />
  </View>
  );
};


const move = () => {
    navigation.navigate("Login");


}

setTimeout(() => {
    // your code here
//   move ();
  }, 1000);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 200,
    // height: 200,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Logo;

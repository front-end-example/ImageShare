import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>
      其实是在公众号群里，各路朋友的呼声。毕竟关注技术的多数人是为了找到一个好工作
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color:'#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});
